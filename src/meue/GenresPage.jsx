import React, { useRef } from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";
import logoImg from "../img/logo.png";

// 이미지 import
import gen1 from "../img/genres1.jpg";
import gen2 from "../img/genres2.jpg";
import gen3 from "../img/genres3.jpg";
import gen4 from "../img/genres4.jpg";
import gen5 from "../img/genres5.jpg";
import gen6 from "../img/genres6.jpg";
import gen7 from "../img/genres7.jpg";
import gen8 from "../img/genres8.jpg";
import gen9 from "../img/genres9.jpg";
import gen10 from "../img/genres10.jpg";
import gen11 from "../img/genres11.jpg";
import gen12 from "../img/genres12.jpg";
import gen13 from "../img/genres13.jpg";
import gen14 from "../img/genres14.jpg";

export default function GenresPage() {
  const sections = [
    {
      label: "시집",
      books: [
        { id: 20, img: gen1, title: "《내가 아직 쓰지 않은 것》 – 최승호", publisher: "문학동네", quote: "“꽃은 자신이 왜 피는지 모른다. 모르고 핀다.”" },
        { id: 21, img: gen2, title: "《토마토 컵라면》 – 차정은", publisher: "BOOKK(부크크)", quote: "“사랑은 여름의 햇살처럼 따뜻한 감정과 비슷하니까요.”" },
        { id: 22, img: gen3, title: "《꽃을 보듯 너를 본다》 – 나태주", publisher: "지혜", quote: "“너를 좋아하는 마음은 오롯이 나의 것이오.”" },
        { id: 23, img: gen4, title: "《심장보다 단단한 토마토 한 알》 – 고선경", publisher: "열림원", quote: "“투명한 잔이 더욱 투명해지도록 따라 부을 마음이 있다는 거.”" },
      ],
    },
    {
      label: "소설",
      books: [
        { id: 24, img: gen5, title: "《우리가 빛의 속도로 갈 수 없다면》 – 김초엽", publisher: "허블", quote: "“당신이 사라졌다는 사실이 가장 느리게 전달되었다.”" },
        { id: 25, img: gen6, title: "《보건교사 안은영》 – 정세랑", publisher: "민음사", quote: "“친절한 사람들이 나쁜 사람들을 어떻게 이겨요.”" },
        { id: 26, img: gen7, title: "《봄밤의 모든 것》 – 백수린", publisher: "문학과지성사", quote: "“아직 어렸던 우리를 향해 희망을 속상이는 듯했던 그 햇빛.”" },
        { id: 27, img: gen8, title: "《불편한 편의점》 – 김호연", publisher: "나무옆의자", quote: "“사는 건 불편한 거야.”" },
        { id: 28, img: gen9, title: "《두 번째는 해피엔딩》 – 조현선", publisher: "북로망스", quote: "“네 안의 나쁜 기억과 감정, 모두 가져갈게.”" },
      ],
    },
    {
      label: "에세이",
      books: [
        { id: 29, img: gen10, title: "《하늘을 봐, 바람이 불고 있어》 – 고윤", publisher: "스노우폭스북스", quote: "“내 방식의 '진심'이라면 얘기가 다르다.”" },
        { id: 30, img: gen11, title: "《말 더더더듬는 사람》 – 정두현", publisher: "어떤책", quote: "“서로를 궁금해하면 서로에게 더 친절해질 수 있다.”" },
        { id: 31, img: gen12, title: "《매일 행복할 일만 가득할 당신에게》 – 김태환", publisher: "새벽녘", quote: "“매일 행복할 일만 가득할 당신에게 이 책을 전합니다.”" },
        { id: 32, img: gen13, title: "《별자리들》 – 이주원", publisher: "꿈꾸는인생", quote: "“별들은 조용히 죽지 않는다.”" },
        { id: 33, img: gen14, title: "《물고기는 존재하지 않는다》 – 룰루 밀러", publisher: "곰출판", quote: "“그 시련 속에서 가끔 우리는 우연한 승리를 거두기도 한다.”" },
      ],
    },
  ];

  const sliderRefs = useRef([]);
  const scrollPrev = (i) => sliderRefs.current[i].scrollBy({ left: -240, behavior: "smooth" });
  const scrollNext = (i) => sliderRefs.current[i].scrollBy({ left: 240, behavior: "smooth" });

  return (
    <div className="main-container genres-page">
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

      <div className="genres-section">
        {sections.map((sec, idx) => (
          <div className="genre-block" key={idx}>
            <button className="genre-label">{sec.label}</button>
            <div className="slider-wrapper">
              <button className="slider-btn left" onClick={() => scrollPrev(idx)}>‹</button>
              <div className="book-grid slider" ref={(el) => (sliderRefs.current[idx] = el)}>
                {sec.books.map((book, j) => (
                  <Link to={`/book/${book.id}`} className="book-card" key={j}>
                    <div className="img-box">
                      <img src={book.img} alt={book.title} className="book-img" />
                    </div>
                    <div className="text-box">
                      <p className="title">{book.title}</p>
                      <p className="publisher">출판사: {book.publisher}</p>
                      <p className="quote">{book.quote}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <button className="slider-btn right" onClick={() => scrollNext(idx)}>›</button>
            </div>
          </div>
        ))}
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