// src/App.jsx
import { Link, Routes, Route } from 'react-router-dom'
import './styles/style.css'

// 페이지들
import MainPage from './meue/MainPage.jsx'
import LibraryPage from './meue/LibraryPage.jsx'
import ScenesPage from './meue/ScenesPage.jsx'
import OneLinePage from './meue/OneLinePage.jsx'
import GenresPage from './meue/GenresPage.jsx'
import WriterDetailPage from './meue/WriterDetailPage.jsx'
import TheRoomPage from './meue/TheRoomPage.jsx'

// 상세 페이지
import BookDetailPage from './Pages/BookDetailPage.jsx'

export default function App() {
  return (
    <div className="app-wrap">
      {/* ✅ 네가 쓰던 헤더 그대로 */}
      <header className="header">
        <Link to="/" className="logo">
          {/* 필요하면 로고 이미지로 교체 */}
          <span className="logo-img">One Page</span>
        </Link>
        <nav className="nav">
          <Link to="/library">둘러보기</Link>
          <Link to="/oneline">오늘의 문장</Link>
          <Link to="/theroom">작가의 방</Link>
          <Link to="/genres">장르별 책장</Link>
          <Link to="/scenes">책 속 풍경</Link>
        </nav>
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/scenes" element={<ScenesPage />} />
          <Route path="/oneline" element={<OneLinePage />} />
          <Route path="/genres" element={<GenresPage />} />

          {/* ✅ 네비에 맞춘 경로 */}
          <Route path="/theroom" element={<TheRoomPage />} />

          {/* ✅ 상세 경로들 */}
          <Route path="/writer/:id" element={<WriterDetailPage />} />
          <Route path="/book/:id" element={<BookDetailPage />} />

          {/* fallback */}
          <Route path="*" element={<MainPage />} />
        </Routes>
      </main>
    </div>
  )
}
