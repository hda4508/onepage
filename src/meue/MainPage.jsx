// src/meue/MainPage.jsx
import React, { useState } from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";

import logoImg from "../img/logo.png";
import mainImg1 from "../img/Main1.jpg";
import mainImg2 from "../img/Main2.jpg";

export default function MainPage() {
  const slides = [
    {
      image: mainImg1,
      text: "책을 읽는다는 건, 세상의 한 구석에서 조용히 숨 쉬는 법을 배우는 일이에요.",
      text1: "혼자 읽고, 혼자 울고, 혼자 마음을 덮는 일.",
      text2: "그 모든 순간에 문장이 있었죠."
    },
    {
      image: mainImg2,
      text: "한 문장을 오래도록 기억한다는 건,",
      text1: "그 문장이 내 안에 머물렀다는 뜻이에요."
    }
  ];
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((current + 1) % slides.length);

  return (
    <div className="main-container genres-page">
      <header className="header">
        <Link to="/" className="logo" style={{ cursor: "pointer" }}>
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

      {/* 배너 슬라이드 */}
      <section className="banner">
        <div className="banner-slider">
          <img
            src={slides[current].image}
            alt={`배너 ${current + 1}`}
            className="banner-img"
          />

          {/* 가운데 텍스트 오버레이 */}
          <div className="banner-overlay">
            {slides[current].text && <h1 className="overlay-title">{slides[current].text}</h1>}
            {slides[current].text1 && <p className="overlay-sub">{slides[current].text1}</p>}
            {slides[current].text2 && <p className="overlay-sub">{slides[current].text2}</p>}
          </div>

          <button className="arrow left" onClick={prevSlide}>‹</button>
          <button className="arrow right" onClick={nextSlide}>›</button>
        </div>
      </section>

      {/* 소개 문단 */}
      <section className="intro">
        <p>책장 사이를 걷듯, 문장 속을 천천히 지나가는 공간.</p>
        <p>이곳은 책을 판매하지 않지만, 책에서 가장 예쁜 순간만을 담아놨어요.</p>
        <p>이곳은 문장을 아끼는 사람들이 천천히 머물며 영감을 받을 수 있을 거예요.</p>
        <p className="highlight">책을 좋아하는 당신이 마음에 드는 곳 “ 한 페이지 ”</p>
      </section>

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
