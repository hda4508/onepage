import React from "react";
import { useParams, Link } from "react-router-dom";
import { writerDetails } from "../Data/writerData";
import logoImg from "../img/logo.png";
import "../styles/style.css";

export default function WriterDetailPage() {
  const { id } = useParams();
  const writer = writerDetails[id];

  return (
    <div className="main-container writer-detail-page">
      {/* 헤더 영역 */}
      <header className="header">
        <Link to="/" className="logo">
          <img src={logoImg} alt="One Page Logo" className="logo-img" />
        </Link>
        <nav className="nav">
          <Link to="/library">둘러보기</Link>
          <Link to="/oneline">오늘의 문장</Link>
          <Link to="/theroom">작가의 방</Link>
          <Link to="/genres">장르별 책장</Link>
          <Link to="/scenes">책 속 풍경</Link>
        </nav>
      </header>

      {/* 본문 내용 */}
      <main style={{ width: "100%", paddingTop: "100px" }}>
        {!writer ? (
          <div style={{ textAlign: "center", paddingTop: "100px" }}>
            <h2>작가 정보를 찾을 수 없습니다.</h2>
          </div>
        ) : (
          <>
            <h2 style={{ textAlign: "center" }}>{writer.name} 작가의 작품</h2>

            <div className="writer-detail-grid">
              {writer.books.map((book, index) => (
                <div key={index} className="writer-horizontal-card">
                  {book.image ? (
                    <img src={book.image} alt={book.title} className="writer-detail-img" />
                  ) : (
                    <div className="writer-detail-img">IMG</div>
                  )}
                  <div className="writer-book-info">
                    <p className="book-title">{book.title}</p>
                    <p className="book-publisher">출판사: {book.publisher}</p>
                    <p className="book-desc">{book.desc}</p>
                    <p className="book-quote">“{book.quote}”</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>

      {/* 푸터 */}
      <footer className="footer">
        <div className="footer-logo-row">
          <span className="diamond">◆</span>
          <span className="line" />
          <img src={logoImg} alt="One Page" className="footer-logo" />
          <span className="line" />
          <span className="diamond">◆</span>
        </div>
        <p className="footer-text">© 2025 One Page. All rights reserved.</p>
      </footer>
    </div>
  );
}
