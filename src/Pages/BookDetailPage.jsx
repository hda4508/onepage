import React from "react";
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import { bookData } from "../Data/bookData";
import "../styles/style.css";
import logoImg from "../img/logo.png";

export default function BookDetailPage() {
  const { id } = useParams();
  const book = bookData[id];
  const location = useLocation();
  const navigate = useNavigate();

  const fromOneline = location.state?.from === "oneline";
  const prevIndex = location.state?.index;

  if (!book) {
    return (
      <div className="main-container book-detail-page">
        <header className="header">
          <Link to="/" className="logo">
            <img src={logoImg} alt="One Page Logo" className="logo-img" />
          </Link>
        </header>
        <main className="book-detail-body">
          <h2>책 정보를 찾을 수 없습니다.</h2>
          <Link to="/library" className="back-link">← 돌아가기</Link>
        </main>
      </div>
    );
  }

  return (
    <div className="main-container book-detail-page">
      <header className="header">
        <Link to="/" className="logo">
          <img src={logoImg} alt="One Page Logo" className="logo-img" />
        </Link>
      </header>

      <main className="book-detail-body">
        <div className="book-detail-wrapper">
          <div className="book-image">
            <img src={book.image} alt="책 표지" className="book-img" />
          </div>

          <div className="book-info">
            <h2 className="book-title">
              {book.title} <span className="genre">＊ {book.genre}</span>
            </h2>
            <p className="author">{book.author}</p>
            <blockquote className="quote">❝{book.quote}❞</blockquote>

            {book.description.map((line, index) => (
              <p key={index}>{line}</p>
            ))}

            {book.note && <p className="book-note">{book.note}</p>}

            <ul className="tag-list">
              <li>• {book.tag}</li>
            </ul>

            <div className="button-group">
              <button className="back-link" onClick={() => navigate(-1)}>
                ← 이전 페이지로 돌아가기
              </button>
              {fromOneline && (
                <button
                  className="back-link"
                  onClick={() => navigate("/oneline", { state: { index: prevIndex } })}
                >
                  ← 문장으로 돌아가기
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

