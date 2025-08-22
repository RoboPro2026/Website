import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="header-title">長岡技科大ロボコンプロジェクト</h1>
            </Link>
          </div>
          <nav className="nav-menu">
            <Link href="/about" className="nav-link">団体概要</Link>
            <Link href="/activities" className="nav-link">活動内容</Link>
            <Link href="/sponsorship" className="nav-link">スポンサー</Link>
            <Link href="/#contact" className="nav-link">お問い合わせ</Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 