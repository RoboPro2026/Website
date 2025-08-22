import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="flex items-center">
            <a href="/">
              <h1 className="header-title">長岡技科大ロボコンプロジェクト</h1>
            </a>
          </div>
          <nav className="nav-menu">
            <a href="/about" className="nav-link">団体概要</a>
            <a href="/activities" className="nav-link">活動内容</a>
            <a href="/sponsorship" className="nav-link">スポンサー</a>
            <a href="/#contact" className="nav-link">お問い合わせ</a>
          </nav>
        </div>
      </div>
    </header>
  );
} 