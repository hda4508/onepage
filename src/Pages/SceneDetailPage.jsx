// src/pages/SceneDetailPage.jsx
import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "../styles/style.css";
import logoImg from "../img/logo.png";

import Sce1 from "../img/Scenes1.jpg";
import Sce2 from "../img/Scenes2.jpg";
import Sce3 from "../img/Scenes3.jpg";

const scenes = [
  {
    src: Sce1,
    alt: "책 속 풍경 1",
    text: "사랑을 가득 품은 너처럼, 꽃같이 견뎌온 너처럼, 작은 별이지만 빛나고 있어."
  },
  {
    src: Sce2,
    alt: "책 속 풍경 2",
    text: "여기서 마음을 담아, 그때 그 문장 속을 천천히 지나가 보세요."
  },
  {
    src: Sce3,
    alt: "책 속 풍경 3",
    text: "눈부신 하루의 끝, 당신만의 이야기를 담아 갑니다."
  }
];

export default function SceneDetailPage() {
  const { id } = useParams();
  const scene = scenes[parseInt(id) - 1];
  const navigate = useNavigate();

  if (!scene) {
    return <div>해당 풍경을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="main-container scene-detail-page">
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

      <main className="scene-detail-body">
        <div className="scene-list">
          {scenes.map((s, idx) => (
            <div key={idx} className="scene-card">
              <img src={s.src} alt={s.alt} className="scene-img" />
              <p className="scene-text">{s.text}</p>
            </div>
          ))}
        </div>
        <button className="back-link" onClick={() => navigate(-1)}>← 돌아가기</button>
      </main>
    </div>
  );
}