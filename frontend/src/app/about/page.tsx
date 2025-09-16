import React from "react";
import Link from "next/link";

const achievements = [
  { year: '2025', details: ['東海地区交流ロボコンにてRohm株式会社様より特別賞受賞。'] },
  { year: '2024', details: ['NHK学生ロボコン2024にてベスト8およびアイディア賞を受賞。'] },
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
  return (
    <div className="min-h-screen bg-stone-50 text-gray-800">
      <main className="py-20 px-4 md:px-8 lg:px-16 fade-in">
        <div className="max-w-4xl mx-auto">

          {/* ページタイトル */}
          <header className="text-center mb-20">
            <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
              団体概要
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              長岡技術科学大学ロボコンプロジェクトについて
            </p>
          </header>

          {/* 団体について */}
          <section id="about-us" className="mb-24">
            <h2 className="section-title text-gray-900">私たちについて</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                長岡技術科学大学ロボコンプロジェクトは、NHK学生ロボコンやABUアジア・太平洋ロボットコンテストでの優勝を最終目標に掲げ、日々活動している学生団体です。
                単にロボットを製作するだけでなく、その過程で得られる知識、技術、そしてチームワークを大切にしています。
              </p>
              <p>
                私たちの活動は、学年や専門分野を問わず、ものづくりに情熱を持つすべての学生に開かれています。初心者から経験者まで、多様なバックグラウンドを持つメンバーが協力し合い、一つの目標に向かって切磋琢磨しています。
              </p>
            </div>
          </section>

          {/* 活動内容 */}
          <section id="activities" className="mb-24">
            <h2 className="section-title text-gray-900">活動内容</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="activity-card-about">
                <h3 className="text-2xl font-bold mb-4">ロボット製作</h3>
                <p>
                  大会のルールに基づき、毎年新しいロボットをゼロから設計・製作します。アイデア出しから設計、加工、組立、プログラミング、そしてテストまで、ロボット開発の全工程を学生主体で行います。
                </p>
              </div>
              <div className="activity-card-about">
                <h3 className="text-2xl font-bold mb-4">班活動</h3>
                <p>
                  活動は主に「機械班」「回路班」「制御班」「運営班」の4つの班に分かれて行われます。各班が専門性を高めつつ、密に連携を取ることで、複雑なロボットシステムを完成させます。
                </p>
              </div>
            </div>
            <div className="text-center">
              <Link href="/activities" className="contact-button">
                各班の活動や代表挨拶を見る
              </Link>
            </div>
          </section>

          {/* 年間行事 */}
          <section id="annual-events" className="mb-24">
            <h2 className="section-title text-gray-900">年間行事</h2>
            <div className="relative border-l-2 border-orange-500 pl-8">
              {/* イベント1 */}
              <div className="mb-12">
                <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-2 mt-1.5"></div>
                <h3 className="text-xl font-bold text-gray-900">4月: 新入生歓迎会</h3>
                <p className="text-gray-700">新しい仲間を迎え、活動内容を紹介します。</p>
              </div>
              {/* イベント2 */}
              <div className="mb-12">
                <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-2 mt-1.5"></div>
                <h3 className="text-xl font-bold text-gray-900">6月: NHK学生ロボコン</h3>
                <p className="text-gray-700">一年間の集大成。全国の大学とアイディア・技術を競い合います。</p>
              </div>
              {/* イベント3 */}
              <div className="mb-12">
                <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-2 mt-1.5"></div>
                <h3 className="text-xl font-bold text-gray-900">8月: ABUロボコン</h3>
                <p className="text-gray-700">NHK学生ロボコンで優勝すると、日本代表として世界と戦います。</p>
              </div>
               {/* イベント4 */}
              <div className="mb-12">
                <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-2 mt-1.5"></div>
                <h3 className="text-xl font-bold text-gray-900">9月: 東海地区交流ロボコンなどの大会への参加</h3>
                <p className="text-gray-700">新体制でのロボット製作が始まります。技術共有やチームビルディングを行います。</p>
              </div>
            </div>
          </section>

          {/* 活動実績 */}
          <section id="achievements" className="mb-24">
            <h2 className="section-title text-gray-900">活動実績</h2>
            <div className="space-y-12">
              {achievements.map((achievement) => (
                <div key={achievement.year}>
                  <h3 className="text-3xl font-bold text-orange-600 mb-6 pl-4 border-l-4 border-orange-500">{achievement.year}年</h3>
                  <ul className="list-disc pl-12 space-y-2 text-gray-700">
                    {achievement.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* メンバー募集 */}
          <section id="recruitment" className="mb-24">
            <h2 className="section-title text-gray-900">メンバー募集</h2>
            <div className="prose prose-lg max-w-none bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">募集条件</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>長岡技術科学大学 学部1～4年生の全課程学生</li>
                <li>ロボットが好きな方</li>
                <li>ものづくりが好きな方</li>
                <li>経験・未経験不問</li>
              </ul>
              <p className="mt-6">
                高専ロボコン経験者はもちろん、高専からの未経験者、一般高校からの未経験者も大歓迎です。
              </p>
              <p>
                問題を打開し一生懸命作ったロボットが競技を達成した時のうれしさは格別です。ものづくりの醍醐味を一番感じられる場所だと思います。
              </p>
              <p className="font-bold">
                勝利を目指して、一緒にがんばりましょう。お待ちしております。
              </p>
            </div>
          </section>

        </div>
      </main>

      {/* フッターはグローバルレイアウトで表示される想定 */}
    </div>
  );
} 