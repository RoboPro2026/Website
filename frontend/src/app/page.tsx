"use client";

import React, { useState } from "react";
import Image from "next/image";
import NewsSection from "@/components/sections/NewsSection";
import BlogSection from "@/components/sections/BlogSection";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-stone-50 fade-in">
      {/* ヘッダー */}
      <header className="header">
        <div className="header-container">
          <div className="header-content">
            <div className="flex items-center">
              <h1 className="header-title">長岡技科大ロボコンプロジェクト</h1>
            </div>
            <nav className="nav-menu">
              <a href="#about" className="nav-link">サークルについて</a>
              <a href="#activities" className="nav-link">活動内容</a>
              <a href="#members" className="nav-link">メンバー</a>
              <a href="#contact" className="nav-link">お問い合わせ</a>
            </nav>
          </div>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="hero-section">
        <div className="hero-bg" style={{clipPath: 'inset(0 0 0 0)'}}>
          <Image
            src="/assets/home/hero.png"
            alt="サークル活動の様子"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            やるぞ、<br />
            <span className="text-orange-400">ロボコン</span>
          </h1>
        </div>
        <div className="hero-scroll">
          <span className="scroll-text">SCROLL</span>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="scroll-icon" viewBox="0 0 24 24">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </section>

      {/* サークルについて */}
      <section id="about" className="about-section">
        <div className="section-container">
          <div className="text-center mb-20">
            <h2 className="section-title">サークルについて</h2>
            <p className="section-subtitle about-subtitle">
              長岡技科大ロボコンプロジェクトは、NHK学生ロボコンやABUロボコンでの優勝を目指し、ロボットの設計・製作・制御・プログラミングに日々取り組んでいる学部生による学生団体です。ものづくりやチームワークを通じて成長できる環境です。初心者も大歓迎！
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
              [
                { name: '機械班', description: 'ロボットの設計・製作を担当。機械加工やCAD設計を通じて、ロボットの骨格を作り上げます。', imgSrc: '/assets/home/hero.png' },
                { name: '回路班', description: '電子回路の設計・製作を担当。基板設計や配線を通じて、ロボットの神経系を作り上げます。', imgSrc: '/assets/home/hero.png' },
                { name: '制御班', description: 'プログラミング・制御を担当。マイコン制御やソフトウェア開発を通じて、ロボットの頭脳を作り上げます。', imgSrc: '/assets/home/hero.png' },
                { name: '運営班', description: 'サークルの運営・広報を担当。イベント企画や広報活動を通じて、チーム全体を支えます。', imgSrc: '/assets/home/hero.png' }
              ].map((team) => (
                <div key={team.name} className="about-card group">
                  <Image src={team.imgSrc} alt={team.name} layout="fill" className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-700/80 via-orange-600/20 to-transparent transition-all duration-300 group-hover:from-orange-700/90 group-hover:via-orange-600/50"></div>
                  <div className="relative flex flex-col justify-end h-full p-6 text-white">
                    <h3 className="text-2xl font-bold tracking-tight">{team.name}</h3>
                    <div className="mt-2 overflow-hidden">
                      <p className="text-white/80 transition-all duration-500 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                        {team.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* 活動内容 */}
      <section id="activities" className="activities-section">
        <div className="section-container">
          <div className="text-center mb-20">
            <h2 className="section-title text-gray-900">活動内容</h2>
            <p className="section-subtitle activities-subtitle">
              私たちの主な活動内容
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="activity-card">
              <h3 className="activity-title">ロボット製作</h3>
              <p className="activity-text">
                ロボットの設計・製作・プログラミング・制御を行い、NHK学生ロボコンやABUロボコンに挑戦しています。
              </p>
              <ul className="activity-list">
                <li className="activity-item">
                  <span className="activity-bullet">•</span>
                  <span>ロボット設計・機械加工</span>
                </li>
                <li className="activity-item">
                  <span className="activity-bullet">•</span>
                  <span>電子回路・制御・プログラミング</span>
                </li>
                <li className="activity-item">
                  <span className="activity-bullet">•</span>
                  <span>チームビルディング・作業会</span>
                </li>
              </ul>
            </div>
            <div className="activity-card">
              <h3 className="activity-title">イベント・交流</h3>
              <p className="activity-text">
                新歓イベントや技術交流会、合宿なども開催し、メンバー同士の親睦を深めています。
              </p>
              <ul className="activity-list">
                <li className="activity-item">
                  <span className="activity-bullet">•</span>
                  <span>新歓イベント</span>
                </li>
                <li className="activity-item">
                  <span className="activity-bullet">•</span>
                  <span>技術交流会</span>
                </li>
                <li className="activity-item">
                  <span className="activity-bullet">•</span>
                  <span>合宿</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ニュース */}
      <NewsSection />

      {/* メンバー */}
      <section id="members" className="members-section">
        <div className="section-container">
          <div className="text-center mb-20">
            <h2 className="section-title text-gray-900">メンバー</h2>
            <p className="section-subtitle members-subtitle">
              学部1年生から4年生まで、機械・電気・情報・制御など多様な分野の学部生が協力し合い、ロボコンに挑戦しています。
              初心者も大歓迎！先輩が丁寧にサポートします。
            </p>
          </div>
        </div>
      </section>

      {/* ブログ */}
      <BlogSection />

      {/* スポンサー一覧 */}
      <section id="sponsor" className="sponsor-section">
        <div className="section-container">
          <div className="text-center mb-20">
            <h2 className="section-title text-gray-900">スポンサー</h2>
            <p className="section-subtitle sponsor-subtitle">
              長岡技科大ロボコンプロジェクトは、以下のスポンサー企業・団体の皆様からご支援をいただいています。<br />
            </p>
          </div>
          <div className="sponsor-grid">
            <img src="/assets/sponser/mjs.png" alt="スポンサー mjs" className="sponsor-logo" />
            <img src="/assets/sponser/ocs.png" alt="スポンサー ocs" className="sponsor-logo" />
            <img src="/assets/sponser/tkf.png" alt="スポンサー tkf" className="sponsor-logo" />
            <img src="/assets/sponser/systecom.png" alt="スポンサー systecom" className="sponsor-logo" />
            <img src="/assets/sponser/justem.png" alt="スポンサー justem" className="sponsor-logo" />
            <img src="/assets/sponser/fieldworks.png" alt="スポンサー fieldworks" className="sponsor-logo" />
            <img src="/assets/sponser/unext.png" alt="スポンサー unext" className="sponsor-logo" />
            <img src="/assets/sponser/sprix.png" alt="スポンサー sprix" className="sponsor-logo" />
            <img src="/assets/sponser/noex.png" alt="スポンサー noex" className="sponsor-logo" />
            <img src="/assets/sponser/tdk.png" alt="スポンサー tdk" className="sponsor-logo" />
            <img src="/assets/sponser/makita.png" alt="スポンサー makita" className="sponsor-logo" />
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="section-title text-gray-900">お問い合わせ</h2>
          <p className="section-subtitle contact-subtitle">
            入部希望・見学希望・スポンサー等のお問い合わせはSNS・メールまたは下のお問い合わせのフォームよりご連絡ください。
          </p>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="contact-card">
              <h3 className="contact-card-title">連絡先</h3>
              <div className="contact-info">
                <p>Email: example@example.com</p>
                <p>Twitter: @example</p>
                <p>Instagram: @example</p>
              </div>
            </div>
            <div className="contact-card">
              <h3 className="contact-card-title">活動場所</h3>
              <div className="contact-info">
                <p>長岡技術科学大学 機械建設棟 2F</p>
                <p>長岡技術科学大学 セコムホール</p>
              </div>
            </div>
          </div>
          <button className="contact-button">
            お問い合わせフォーム
          </button>
        </div>
      </section>

      <footer className="footer">
        <div className="section-container">
          <div className="text-center">
            <h3 className="footer-title">長岡技科大ロボコンプロジェクト</h3>
            <p className="footer-text">
              学生ロボコン・ABUロボコンでの優勝を目指して活動しています。
            </p>
            <div className="footer-divider">
              <p className="footer-copyright">
                © 2024 長岡技科大ロボコンプロジェクト. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
