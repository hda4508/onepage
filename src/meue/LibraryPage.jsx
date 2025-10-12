// src/pages/LibraryPage.jsx
import React from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";
import logoImg from "../img/logo.png";

// 카드 이미지 import
import lib1 from "../img/Library1.jpg";
import lib2 from "../img/Library2.jpg";
import lib3 from "../img/Library3.jpg";
import lib4 from "../img/Library4.jpg";
import lib5 from "../img/Library5.jpg";
import lib6 from "../img/Library6.jpg";
import lib7 from "../img/Library7.jpg";
import lib8 from "../img/Library8.jpg";
import lib9 from "../img/Library9.jpg";
import lib10 from "../img/Library10.jpg";
import lib11 from "../img/Library11.jpg";
import lib12 from "../img/Library12.jpg";
import lib13 from "../img/Library13.jpg";
import lib14 from "../img/Library14.jpg";
import lib15 from "../img/Library15.jpg";

// 카드 컴포넌트
function ImageCard({ src, alt, caption, to }) {
  return (
    <Link to={to} className="image-card-container">
      <div className="image-card-xxl">
        <img src={src} alt={alt} className="image-content" />
      </div>
      <p className="image-caption">{caption}</p>
    </Link>
  );
}

export default function LibraryPage() {
  const images = [
    { src: lib1,  alt: "Book1",  caption: "이제야 언니에게 - 최진영", to: "/book/1" },
    { src: lib2,  alt: "Library 2",  caption: "혁명가 붓다 - 법륜", to: "/book/2" },
    { src: lib3,  alt: "Library 3",  caption: "소년이 온다 - 한강", to: "/book/3" },
    { src: lib4,  alt: "Library 4",  caption: "모순 - 양귀자", to: "/book/4" },
    { src: lib5,  alt: "Library 5",  caption: "급류 - 정대건", to: "/book/5" },
    { src: lib6,  alt: "Library 6",  caption: "마중도 배웅도 없이 - 박준", to: "/book/6" },
    { src: lib7,  alt: "Library 7",  caption: "채식주의자 - 한강", to: "/book/7" },
    { src: lib8,  alt: "Library 8",  caption: "한국이란 무엇인가 - 김영민", to: "/book/8" },
    { src: lib9,  alt: "Library 9",  caption: "손자병법 - 손무", to: "/book/9" },
    { src: lib10, alt: "Library 10", caption: "어떤 행동은 나라를 바꾼다 - 김우호", to: "/book/10" },
    { src: lib11, alt: "Library 11", caption: "계엄과 내란을 넘어 - 한인섭", to: "/book/11" },
    { src: lib12, alt: "Library 12", caption: "어린 왕자 - 앙투안 드 생텍쥐페리", to: "/book/12" },
    { src: lib13, alt: "Library 13", caption: "오늘은 아무래도 덮밥 - 이마이 료", to: "/book/13" },
    { src: lib14, alt: "Library 14", caption: "데미안 - 헤르만 헤세", to: "/book/14" },
    { src: lib15, alt: "Library 15", caption: "인간실격 - 디자이 오사무", to: "/book/15" },
  ];

  return (
    <div className="main-container library-page">
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

      <main className="library-grid-wrapper pushed-down">
        <div className="book-grid responsive-grid">
          {images.map((img, idx) => (
            <ImageCard
              key={idx}
              src={img.src}
              alt={img.alt}
              caption={img.caption}
              to={img.to}
            />
          ))}
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
