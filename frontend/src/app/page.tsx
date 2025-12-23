"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import NewsSection from "@/components/sections/NewsSection";
import SnsSection from "@/components/sections/SnsSection";
import LoadingScreen from "@/components/LoadingScreen";

// 読み込む画像のリスト
const imageUrls = [
  '/assets/home/hero.png',
  '/assets/home/denshi.png',
  '/assets/news/robocon2024.jpg',
  '/assets/news/welcome.jpg',
  '/assets/news/sponsor.jpg',
];

interface Supporter {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const supporters: Supporter[] = [
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
  { src: '/assets/sponser/npm.jpg', alt: 'NPM', width: 150, height: 50 },
  { src: '/assets/sponser/tone.jpg', alt: 'TONE', width: 150, height: 50 },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [shuffledSupporters, setShuffledSupporters] = useState<Supporter[]>([]);

  useEffect(() => {
    const shuffled = [...supporters];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledSupporters(shuffled);
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
      const img = new window.Image();
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
      }, 1200);
    }
  }, [progress]);

  if (isLoading) {
    return <LoadingScreen progress={progress} />;
  }

  return (
    <div className="min-h-screen bg-stone-50 fade-in selection:bg-orange-200">
      {/* ヒーローセクション */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/home/hero.png"
            alt="サークル活動の様子"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none mb-6 drop-shadow-2xl">
            やるぞ、<br />
            <span className="text-orange-500 inline-block mt-2">ロボコン</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-medium tracking-wide max-w-2xl mx-auto drop-shadow-md">
            長岡技術科学大学 ロボコンプロジェクト
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 animate-bounce">
          <span className="text-white/70 text-xs tracking-[0.3em] mb-2 uppercase">Scroll</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </div>
      </section>

      {/* サークルについて */}
      <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50/50 -skew-x-12 translate-x-1/4 z-0" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-start justify-between mb-16 gap-8">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                About Us
                <span className="block text-lg font-normal text-orange-600 mt-2 tracking-normal">サークルについて</span>
              </h2>
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-600 leading-relaxed text-lg">
                長岡技科大ロボコンプロジェクトは、NHK学生ロボコンでの優勝、そして世界大会であるABUロボコンへの出場を目指して活動しています。
                「機械」「回路」「制御」「運営」の4つの班に分かれ、それぞれの得意分野を活かして、1台のロボットを作り上げています。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: '機械班', en: 'Mechanical', description: 'CADでの設計から加工まで。ロボットのカタチを一から作り上げます。', imgSrc: '/assets/home/hero.png' },
              { name: '回路班', en: 'Electrical', description: '基板設計や配線を行い、ロボットが動くための神経回路を繋ぎます。', imgSrc: '/assets/home/denshi.png' },
              { name: '制御班', en: 'Control', description: 'プログラミングを駆使して、ロボットに命を吹き込み、自在に操ります。', imgSrc: '/assets/home/seigyo.png' },
              { name: '運営班', en: 'Management', description: '広報やイベント企画など、ロボット製作以外の面からチームを支えます。', imgSrc: '/assets/home/syougaikatsudou.png' }
            ].map((team) => (
              <div key={team.name} className="group relative h-96 rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                <Image 
                  src={team.imgSrc} 
                  alt={team.name} 
                  fill 
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 group-hover:via-black/40 transition-all duration-300" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <span className="text-orange-400 font-mono text-sm tracking-wider mb-1 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">{team.en}</span>
                  <h3 className="text-3xl font-bold mb-2 transform transition-all duration-300 group-hover:-translate-y-2">{team.name}</h3>
                  <p className="text-gray-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 delay-100">
                    {team.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 活動内容 - モダンなカードデザイン */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">活動のフィールド</h2>
            <p className="text-gray-600 text-lg">
              本気で技術を競い合うロボコンへの挑戦。<br className="hidden md:block"/>
              そして、ものづくりの楽しさを伝える地域交流。どちらも私たちの大切な活動です。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-stone-100 flex flex-col">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-8 text-orange-600">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ロボコンへの挑戦</h3>
              <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                目指すはNHK学生ロボコン優勝、そして世界一。
                毎年発表されるユニークな課題ルールに対し、チーム全員でアイデアを出し合い、独自のロボットを開発しています。
              </p>
              <Link href="/activities" className="text-orange-600 font-bold hover:text-orange-700 flex items-center gap-2 group">
                大会実績を見る 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-stone-100 flex flex-col">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 text-blue-600">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">地域との繋がり</h3>
              <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                「ものづくりって楽しい！」を伝えるために、地域のイベント参加や子ども向けのワークショップを開催しています。
                技術を通じた交流を大切にしています。
              </p>
              <Link href="/activities" className="text-blue-600 font-bold hover:text-blue-700 flex items-center gap-2 group">
                地域活動を見る 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* スケジュール */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">年間スケジュール</h2>
          <div className="relative max-w-4xl mx-auto">
             <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 hidden md:block" />
             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {[
                 { month: '4-5月', title: '新歓・チーム結成', desc: '新入生を迎え、新たなチーム体制でスタートします。' },
                 { month: '6月', title: 'NHK学生ロボコン', desc: '国内予選。これまでの成果をぶつける最大の舞台です。' },
                 { month: '8月', title: 'ABUロボコン', desc: '世界大会。各国の代表と技術を競い合います。' },
                 { month: '10-3月', title: '技術継承・開発', desc: '次年度に向けた基礎研究や講習会を行います。' },
               ].map((item, i) => (
                 <div key={i} className="relative bg-white p-6 rounded-xl border border-gray-100 shadow-sm z-10">
                   <div className="text-orange-500 font-bold mb-2">{item.month}</div>
                   <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
                   <p className="text-sm text-gray-800">{item.desc}</p>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* ニュース & SNS */}
      <div className="bg-stone-50">
        <NewsSection />
        <SnsSection />
      </div>

      {/* スポンサーセクション */}
      <section id="supporters" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Supporters</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            私たちの活動は、多くの企業様・団体様からのご支援によって支えられています。
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 max-w-6xl mx-auto transition-all duration-500">
            {shuffledSupporters.map((supporter) => (
              <div key={supporter.src} className="relative w-[120px] h-[60px] md:w-[160px] md:h-[80px] transition-transform hover:scale-110 duration-300">
                <Image
                  src={supporter.src}
                  alt={supporter.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Link href="/sponsorship" className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-colors">
              ご支援について
            </Link>
          </div>
        </div>
      </section>

      {/* お問い合わせへの誘導 */}
      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/general/pattern.svg')] opacity-5" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Join Our Team</h2>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto mb-12">
            ロボット製作に興味がある方、私たちの活動をご支援いただける方。<br/>
            まずはお気軽にお問い合わせください。
          </p>
          
          <Link href="/contact" className="inline-block bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-500 transition-all shadow-lg hover:shadow-orange-500/30">
            お問い合わせ・入部希望はこちら
            </Link>
        </div>
      </section>
    </div>
  );
}
