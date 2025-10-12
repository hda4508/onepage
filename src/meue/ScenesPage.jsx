// src/meue/ScenesPage.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/style.css";
import logoImg from "../img/logo.png";

import Sce1 from "../img/Scenes1.jpg";
import Sce2 from "../img/Scenes2.jpg";
import Sce3 from "../img/Scenes3.jpg";

export default function ScenesPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      src: Sce1,
      alt: "책 속 풍경 1",
      text: "사랑을 가득 품은 너처럼, 꽃같이 견뎌온 너처럼, 작은 별이지만 빛나고 있어."
    },
    {
      id: 2,
      src: Sce2,
      alt: "책 속 풍경 2",
      text: "여기서 마음을 담아, 그때 그 문장 속을 천천히 지나가 보세요."
    },
    {
      id: 3,
      src: Sce3,
      alt: "책 속 풍경 3",
      text: "눈부신 하루의 끝, 당신만의 이야기를 담아 갑니다."
    }
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleImageClick = () => {
    // 슬라이드 이미지 클릭 시 세부 페이지로 이동 (예: /scenes/1)
    navigate(`/scenes/${slides[currentSlide].id}`);
  };

  const { src, alt, text } = slides[currentSlide];

  return (
    <div className="main-container scenes-page">
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

      <div className="slider-container">
        <button className="arrow left" onClick={handlePrevSlide}>‹</button>

        <div className="slide" onClick={handleImageClick} style={{ cursor: "pointer" }}>
          <div className="image-container">
            <img src={src} alt={alt} />
          </div>
          <div className="overlay">
            <p>{text}</p>
          </div>
        </div>

        <button className="arrow right" onClick={handleNextSlide}>›</button>
      </div>

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