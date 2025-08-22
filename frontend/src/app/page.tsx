"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import NewsSection from "@/components/sections/NewsSection";
import BlogSection from "@/components/sections/BlogSection";
import LoadingScreen from "@/components/LoadingScreen";

// 読み込む画像のリスト
const imageUrls = [
  '/assets/home/hero.png',
  '/assets/home/denshi.png',
  '/assets/news/robocon2024.jpg',
  '/assets/news/welcome.jpg',
  '/assets/news/sponsor.jpg',
  // ... 他の主要な画像もここに追加
];

interface Sponsor {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const sponsors: Sponsor[] = [
  { src: '/assets/sponser/tdk.png', alt: 'TDK', width: 150, height: 50 },
  { src: '/assets/sponser/makita.png', alt: 'Makita', width: 150, height: 50 },
  { src: '/assets/sponser/mjs.png', alt: 'MJS', width: 150, height: 50 },
  { src: '/assets/sponser/unext.png', alt: 'U-NEXT', width: 150, height: 50 },
  { src: '/assets/sponser/sprix.png', alt: 'Sprix', width: 150, height: 50 },
  { src: '/assets/sponser/justem.png', alt: 'Justem', width: 120, height: 50 },
  { src: '/assets/sponser/fieldworks.png', alt: 'Fieldworks', width: 150, height: 50 },
  { src: '/assets/sponser/noex.png', alt: 'Noex', width: 150, height: 50 },
  { src: '/assets/sponser/tkf.png', alt: 'TKF', width: 150, height: 50 },
  { src: '/assets/sponser/systecom.png', alt: 'Systecom', width: 150, height: 50 },
  { src: '/assets/sponser/ocs.png', alt: 'OCS', width: 150, height: 50 },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [shuffledSponsors, setShuffledSponsors] = useState<Sponsor[]>([]);

  useEffect(() => {
    // Fisher-Yates shuffle algorithm
    const shuffled = [...sponsors];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledSponsors(shuffled);
  }, []);

  useEffect(() => {
    const visited = sessionStorage.getItem("visited");
    if (visited) {
      setIsLoading(false);
      return;
    }

    let loadedCount = 0;
    const totalImages = imageUrls.length;

    if (totalImages === 0) {
        setProgress(100);
        return;
    }

    imageUrls.forEach((src) => {
      const img = new (window as any).Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        const newProgress = (loadedCount / totalImages) * 100;
        setProgress(newProgress);
      };
      img.onerror = () => {
        loadedCount++;
        const newProgress = (loadedCount / totalImages) * 100;
        setProgress(newProgress);
      }
    });
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("visited", "true");
      }, 1200); // LoadingScreenのフェードアウトと合わせる
    }
  }, [progress]);


  if (isLoading) {
    return <LoadingScreen progress={progress} />;
  }

  return (
    <div className="min-h-screen bg-stone-50 fade-in">
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
              長岡技科大ロボコンプロジェクトは、NHK学生ロボコンやABUロボコンでの優勝を目指し活動する学生団体です。私たちは「機械班」「回路班」「制御班」「運営班」の4つの班に分かれ、それぞれの専門知識を活かしながら、一つの目標に向かってロボット開発に取り組んでいます。ものづくりやチームワークを通じて成長できる環境で、初心者も大歓迎です！
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
              [
                { name: '機械班', description: 'ロボットの設計・製作を担当。機械加工やCAD設計を通じて、ロボットの骨格を作り上げます。', imgSrc: '/assets/home/hero.png' },
                { name: '回路班', description: '電子回路の設計・製作を担当。基板設計や配線を通じて、ロボットの神経系を作り上げます。', imgSrc: '/assets/home/denshi.png' },
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

          {/* その他の活動 */}
          <div className="mt-24 text-center">
            <h3 className="text-3xl font-bold text-stone-800 mb-4">世界を目指す挑戦と、地域との繋がり</h3>
            <p className="text-stone-600 max-w-2xl mx-auto">
              NHK学生ロボコンでの勝利、そしてその先のABUロボコンでの世界一を目指す挑戦。それと同時に、地域社会との交流も大切にしています。
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="activity-card">
              <h4 className="activity-title">大会への挑戦</h4>
              <p className="activity-text">
                毎年設定される困難な課題に対し、独創的なアイデアと技術力で立ち向かいます。目標はただ一つ、世界一です。
              </p>
              <a href="/activities" className="text-orange-600 hover:underline mt-4 inline-block">活動詳細を見る →</a>
            </div>
            <div className="activity-card">
              <h4 className="activity-title">地域との繋がり</h4>
              <p className="activity-text">
                ものづくりの楽しさを伝えるため、地域のイベント参加や企業との交流も積極的に行っています。
              </p>
               <a href="/activities" className="text-orange-600 hover:underline mt-4 inline-block">活動詳細を見る →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ニュース */}
      <NewsSection />

      {/* ブログ */}
      <BlogSection />

      {/* スポンサーセクション */}
      <section id="sponsors" className="contact-section bg-white">
        <div className="contact-container">
          <h2 className="section-title text-gray-900">スポンサー</h2>
          <p className="section-subtitle contact-subtitle">
            私たちの活動は、多くの企業様からのご支援によって支えられています。
          </p>
          <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
            <div className="flex flex-wrap gap-x-12 gap-y-8 justify-center items-center">
              {shuffledSponsors.map((sponsor) => (
                <Image
                  key={sponsor.src}
                  src={sponsor.src}
                  alt={sponsor.alt}
                  width={sponsor.width}
                  height={sponsor.height}
                  className="object-contain"
                />
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="/sponsorship" className="contact-button">
              スポンサーシップの詳細を見る
            </a>
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
                <p>Email: robopro.nut@gmail.com</p>
                <p>Twitter: @nut_robopro</p>
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
    </div>
  );
}
