'use client';

import React from "react";
import Link from "next/link";

const achievements = [
  { year: '2025', details: ['東海地区交流ロボコンにてRohm株式会社様より特別賞受賞。'] },
  { year: '2024', details: ['NHK学生ロボコン2024にてベスト4およびアイディア賞を受賞。'] },
  { year: '2021', details: ['NHK学生ロボコン2021にて優勝およびABUロボコン出場。'] },
  { year: '2020', details: ['オンライン！学ロボFESTIVALに参加。パナソニックシステムソリューションズジャパン株式会社様より特別賞を受賞。'] },
  { year: '2019', details: ['NHK学生ロボコン2019にてベスト8およびアイディア賞を受賞。', '東海地区交流ロボコンにて第3位入賞。', 'SummerRobotContestにて第3位入賞。'] },
  { year: '2018', details: ['NHK学生ロボコン2018に参加。', '東海地区交流ロボコンに参加。', 'SummerRobotContestにて優勝。'] },
  { year: '2017', details: ['NHK学生ロボコン2017に参加。'] },
  { year: '2016', details: ['NHK学生ロボコン2016にシード校として参加し、ベスト8。'] },
  { year: '2015', details: ['NHK大学ロボコン2015にてベスト16及び特別賞(トヨタ自動車株式会社様)を受賞。', '豪技！長岡ものづくりフェアに出展。'] },
  { year: '2014', details: ['NHK大学ロボコン2014にて準優勝及び特別賞(ローム株式会社様)を受賞。'] },
  { year: '2013', details: ['NHK大学ロボコン2013にてベスト4、技術賞、特別賞(株式会社ナガセ様)を受賞。'] },
  { year: '2012', details: ['第2回キャチロボバトルコンテストにて優勝。', 'NHK大学ロボコン2012にてベスト4及びアイディア賞を受賞。'] },
  { year: '2011', details: ['NHK大学ロボコン2011にて準優勝。'] },
  { year: '2010', details: ['NHK大学ロボコン2010にてベスト8。'] },
  { year: '2009', details: ['NHK大学ロボコン2009にてベスト8。'] },
  { year: '2008', details: ['NHK大学ロボコン2008にてベスト8。'] },
  { year: '2007', details: ['NHK大学ロボコン2007にて技術賞を受賞。'] },
  { year: '2006', details: ['NHK大学ロボコン2006にて特別賞(松下電器産業株式会社様)を受賞。'] },
  { year: '2005', details: ['第5回レスキューロボットコンテストにてレスキュー工学大賞、計測自動制御学会賞を受賞。'] },
  { year: '2004', details: ['NHK学ロボコン2004にて技術賞、特別賞(トヨタ自動車株式会社様)を受賞。'] },
  { year: '2003', details: ['NHK大学ロボコンに参加。'] },
  { year: '2002', details: ['第2回レスキューロボットコンテストにてグッドコンセプト賞を受賞。'] },
  { year: '2001', details: ['NHK大学ロボコン2002にて技術賞を受賞。'] },
];

export default function AboutPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  return (
    <div className="min-h-screen bg-stone-50 text-gray-800">
      <main className="py-24 px-4 md:px-8 lg:px-16 fade-in">
        <div className="max-w-5xl mx-auto">

          {/* ページタイトル */}
          <header className="text-center mb-20 pt-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              About Us
              <span className="block text-lg font-normal text-orange-600 mt-2 tracking-normal">団体概要</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              私たち長岡技術科学大学ロボコンプロジェクトの活動と歴史について
            </p>
          </header>

          {/* 団体について */}
          <section id="about-us" className="mb-24 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-orange-500 rounded-full block"></span>
              私たちについて
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
              <p>
                長岡技術科学大学ロボコンプロジェクトは、NHK学生ロボコンやABUアジア・太平洋ロボットコンテストでの優勝を最終目標に掲げ、日々活動している学生団体です。
                単にロボットを製作するだけでなく、その過程で得られる知識、技術、そしてチームワークを大切にしています。
              </p>
              <p>
                私たちは、学年や専門分野を問わず、初心者から経験者まで、多様なバックグラウンドを持つメンバーが協力し合い、一つの目標に向かって切磋琢磨しています。
              </p>
            </div>
          </section>

          {/* 活動内容 */}
          <section id="activities" className="mb-24">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">活動の柱</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"></path><path d="M12 12 2.1 12a10 10 0 0 1 9.9-10V12z"></path><path d="M21.9 12H12l-8.9 9A10 10 0 0 1 12 22a10 10 0 0 1 10-10z"></path></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">ロボット製作</h3>
                <p className="text-gray-600 leading-relaxed">
                  大会のルールに基づき、毎年新しいロボットをゼロから設計・製作します。アイデア出しから設計、加工、組立、プログラミング、そしてテストまで、ロボット開発の全工程を学生主体で行います。
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">班活動</h3>
                <p className="text-gray-600 leading-relaxed">
                  活動は主に「機械班」「回路班」「制御班」「運営班」の4つの班に分かれて行われます。各班が専門性を高めつつ、連携を取ることで、複雑なロボットシステムを完成させます。
                </p>
              </div>
            </div>
            <div className="text-center">
              <Link href="/activities" className="inline-flex items-center justify-center px-8 py-3 border border-orange-500 text-base font-medium rounded-full text-orange-600 bg-white hover:bg-orange-50 transition-colors">
                各班の活動詳細を見る →
              </Link>
            </div>
          </section>

          {/* 年間行事 */}
          <section id="annual-events" className="mb-24">
             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">年間行事</h2>
             <div className="max-w-3xl mx-auto relative pl-8 border-l-2 border-stone-200 space-y-12">
               {[
                 { month: '4月', title: '新入生歓迎会', desc: '新しい仲間を迎え、活動内容を紹介します。' },
                 { month: '6月', title: 'NHK学生ロボコン', desc: '一年間の集大成。全国の大学とアイディア・技術を競い合います。' },
                 { month: '8月', title: 'ABUロボコン', desc: 'NHK学生ロボコンで優勝すると、日本代表として世界と戦います。' },
                 { month: '9月', title: '各種交流大会', desc: '新体制でのロボット製作が始まります。技術共有やチームビルディングを行います。' }
               ].map((event, idx) => (
                 <div key={idx} className="relative">
                   <div className="absolute -left-[41px] top-1 w-5 h-5 bg-white border-4 border-orange-500 rounded-full"></div>
                   <span className="text-orange-500 font-bold block mb-1">{event.month}</span>
                   <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                   <p className="text-gray-600">{event.desc}</p>
                 </div>
               ))}
             </div>
          </section>

          {/* 活動実績 */}
          <section id="achievements" className="mb-24">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">History & Achievements</h2>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-stone-100 flex flex-col md:flex-row gap-4 md:gap-8 hover:border-orange-200 transition-colors">
                  <div className="flex-shrink-0">
                    <span className="text-2xl md:text-3xl font-bold text-orange-500 font-mono block w-24">{achievement.year}</span>
                  </div>
                  <div className="flex-grow pt-1">
                    <ul className="space-y-3">
                      {achievement.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-gray-700 flex items-start">
                          <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* メンバー募集 */}
          <section id="recruitment" className="mb-24 bg-stone-900 text-white p-8 md:p-16 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url('${basePath}/assets/general/pattern.svg')` }} />
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Join Us!</h2>
              <p className="text-stone-300 mb-8 leading-relaxed">
                長岡技術科学大学 学部1～4年生の全課程学生を募集中。<br/>
                ロボットが好き、ものづくりが好きなら、経験は問いません。<br/>
                一緒に世界を目指す仲間をお待ちしています。
              </p>
              <div className="bg-white/10 p-6 rounded-xl text-left mb-8 backdrop-blur-sm border border-white/10">
                <h3 className="font-bold text-lg mb-4 text-orange-400">募集要項</h3>
                <ul className="space-y-2 text-sm text-stone-200">
                  <li className="flex items-center gap-2">✓ 全学年・全学科対象</li>
                  <li className="flex items-center gap-2">✓ 初心者・未経験者大歓迎</li>
                  <li className="flex items-center gap-2">✓ 高専ロボコン経験者も歓迎</li>
                </ul>
              </div>
              <Link href="/contact" className="inline-block bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-500 transition-all shadow-lg hover:shadow-orange-500/30">
                お問い合わせはこちら
              </Link>
            </div>
          </section>

        </div>
      </main>

      {/* フッターはグローバルレイアウトで表示される想定 */}
    </div>
  );
}
