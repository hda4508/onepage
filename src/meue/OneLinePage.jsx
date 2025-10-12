// src/meue/OneLinePage.jsx
import React, { useState } from "react";
import "../styles/style.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "../img/logo.png";

export default function OneLinePage() {
  const quotes = [
    {
      text: `단 한 가지 확신할 수 있었던 건 그 순간 내 인생의 흐름이 바뀌었고,
그렇게 만든 저 사람을 영원히 잊지 못하리라는 것뿐이었다.`,
      author: "– 박서연, 『수키와 니니』",
      date: "2025-04-22",
      bookId: 16
    },
    {
      text: `헤라클레스만큼이나 위엄 있게, 그러나, 사랑은 더 많이 품고서.`,
      author: "– 윌리엄 셰익스피어, 『베니스의 상인』",
      date: "2025-04-23",
      bookId: 17
    },
    {
      text: `아 좋은 대화...... 그만한 것이 없지요, 그렇지 않습니까?`,
      author: "– 김병훈, 『느린 걸음』",
      date: "2025-04-24",
      bookId: 18
    },
    {
      text: `그곳에 아직 별이 뜬 사막이 있을까. 당신은 여전히 사막을 꿈꿀까.`,
      author: "– 천선란, 『어떤 물질의 사랑』",
      date: "2025-04-25",
      bookId: 19
    }
  ];

  const location = useLocation();
  const restoredIndex = location.state?.index ?? 0;

  const [currentIndex, setCurrentIndex] = useState(restoredIndex);
  const tags = ["인생의 문장", "그럭저럭", "좋아요"];
  const [selectedTags, setSelectedTags] = useState({});
  const selectedTag = selectedTags[currentIndex] || null;

  const handleTagClick = (tag) => {
    setSelectedTags((prev) => ({ ...prev, [currentIndex]: tag }));
  };

  const handleNext = () =>
    setCurrentIndex((i) => (i + 1) % quotes.length);
  const handlePrev = () =>
    setCurrentIndex((i) => (i - 1 + quotes.length) % quotes.length);

  const { text, author, date, bookId } = quotes[currentIndex];

  return (
    <div className="main-container oneline-page">
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

      <main className="quote-section">
        <div className="quote-box">
          <button className="arrow left" onClick={handlePrev}>
            <ChevronLeft size={18} />
          </button>

          <p className="quote-text">
            {text.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
          <p className="quote-author">{author}</p>

          <button className="arrow right" onClick={handleNext}>
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="quote-meta">
          <p className="quote-date">{date}</p>
          <p className="quote-title">오늘의 문장은 어떤가요?</p>
          <div className="quote-tags">
            {tags.map((tag) => (
              <button
                key={tag}
                className={selectedTag === tag ? "selected" : ""}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="quote-detail">
            이 문장이 나온 책 <br />
            <Link
              to={`/book/${bookId}`}
              className="quote-link"
              state={{ from: "oneline", index: currentIndex }}
            >
              [ 자세히 보기 ]
            </Link>
          </div>
        </div>
      </main>

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
