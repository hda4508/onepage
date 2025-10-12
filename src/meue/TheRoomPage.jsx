// src/meue/TheRoomPage.jsx
import React from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";
import logoImg from "../img/logo.png";

import Room1 from "../img/Room1.jpg";
import Room2 from "../img/Room2.jpg";
import Room3 from "../img/Room3.jpg";
import Room4 from "../img/Room4.jpg";
import Room5 from "../img/Room5.jpg";
import Room6 from "../img/Room6.jpg";
import Room7 from "../img/Room7.jpg";
import Room8 from "../img/Room8.jpg";
import Room9 from "../img/Room9.jpg";

const writers = [
  {
    id: "park",
    src: Room1,
    name: "박서연",
    description: "책장을 덮은 뒤에도 오랫동안 여운이 남는, 의미 있는 이야기를 쓰는 작가",
    tag: "<수키와 니니>"
  },
  {
    id: "kim",
    src: Room2,
    name: "김청귤",
    description: "아주 오랫동안, 즐겁고 행복하게 글을 쓰고 싶은 작가",
    tag: "<재와 물거품>"
  },
  {
    id: "cho",
    src: Room3,
    name: "조예은",
    description: "하나의 장면이 마음에 깊이 남는 이야기, 마침내 당연 그 장면이 떠오르게 하는 작가",
    tag: "<트로피컬 나이트>"
  },
  {
    id: "han",
    src: Room4,
    name: "한강",
    description: "인간의 고통과 존재의 의미를 섬세한 시적 언어로 탐구하는 작가",
    tag: "<채식주의자>"
  },
  {
    id: "jung",
    src: Room5,
    name: "정대건",
    description: "영화적 감각과 섬세한 문장으로 사랑과 상실, 성장의 상처를 그려내는 작가",
    tag: "<급류>"
  },
  {
    id: "lee",
    src: Room6,
    name: "이옥토",
    description: "고통과 회복, 존재의 섬세함을 탐구하며, 무해한 시선으로 세계를 기록하는 작가",
    tag: "<처음 본 새를 만났을 때처럼>"
  },
  {
    id: "yang",
    src: Room7,
    name: "양귀자",
    description: "인간 내면의 모순과 사회적 현실을 통찰하는 작품으로 한국 문학의 깊이를 더한 작가",
    tag: "<모순>"
  },
  {
    id: "cha",
    src: Room8,
    name: "차정은",
    description: "일상의 감정과 청춘의 섬세한 순간들을 담백한 언어로 풀어내는 작가",
    tag: "<토마토 컵라면>"
  },
  {
    id: "choi",
    src: Room9,
    name: "최진영",
    description: "삶과 죽음, 상실과 사랑의 경계에서 인간 존재의 의미를 탐구하는 작가",
    tag: "<구의 증명>"
  }
];

export default function TheRoomPage() {
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

      <div className="room-wrapper">
        <div className="room-grid">
          {writers.map((writer, index) => (
            <Link to={`/writer/${writer.id}`} key={index} className="writer-card">
              <div className="image-box">
                <img src={writer.src} alt={writer.name} className="writer-image" />
              </div>
              <div className="writer-text-box">
                <p className="writer-name">{writer.name}</p>
                <p className="writer-description">{writer.description}</p>
                <p className="writer-tag">{writer.tag}</p>
                <ul className="text-xs">
                  <li>작가의 책 보러 가기</li>
                </ul>
              </div>
            </Link>
          ))}
        </div>
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
