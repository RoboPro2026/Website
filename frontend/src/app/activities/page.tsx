"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const representative = {
  name: "五十嵐 幸多",
  title: "代表",
  greeting: `いい感じのこめんと(ちょっと長め)。`,
  imageUrl: "/assets/home/hero.png"
};

const challengeImages = [
  '/assets/home/robo2.png',
  '/assets/home/robo1.png',
  '/assets/home/robo4.png',
  '/assets/home/robo5.png',
];
const communityImages = [
  '/assets/home/meeting.png',
  '/assets/home/hoikuen1.png',
  '/assets/home/event1.png',
];

const teams = [
  {
    name: '機械班',
    description: 'ロボットの"身体"を作るエキスパート。3DCADによる設計から、工作機械を駆使した部品製作まで、アイデアを物理的な形にする役割を担います。',
    imageUrl: "/assets/home/hero.png"
  },
  {
    name: '回路班',
    description: 'ロボットの"神経"を司る電子回路のプロフェッショナル。モータードライバやセンサー基板の設計・製作を行い、ロボットに命を吹き込みます。',
    imageUrl: "/assets/home/denshi.png"
  },
  {
    name: '制御班',
    description: 'ロボットの"頭脳"を開発するプログラマー集団。マイコンのプログラミングやAIによる画像認識など、ソフトウェアでロボットの動きを制御します。',
    imageUrl: "/assets/home/seigyo.png"
  },
  {
    name: '運営班',
    description: 'プロジェクト全体を支える縁の下の力持ち。スポンサー渉外、広報活動、会計管理など、円滑なプロジェクト運営に不可欠な役割を担います。',
    imageUrl: "/assets/home/syougaikatsudou.png"
  }
];

const contests = [
  {
    name: 'NHK学生ロボコン',
    description: 'NHKが主催する、全国の大学が参加するロボットコンテストです。毎年異なる競技課題が設定され、学生たちの独創的なアイデアと技術力が試されます。この大会で優勝したチームが、日本代表としてABUロボコンへの出場権を得ます。',
    imageUrl: "/assets/home/nhk.jpg",
    alt: "NHK学生ロボコン ロゴ",
  },
  {
    name: 'ABUロボコン',
    description: 'アジア・太平洋地域の放送局が共同で制作する国際的なロボットコンテストです。各国の国内大会を勝ち抜いた代表チームが一堂に会し、技術力とアイデアを競い合います。私たちにとって、世界一を目指すための最高の舞台です。',
    imageUrl: "/assets/home/abu.png",
    alt: "ABUロボコン ロゴ",
  }
];

const faqs = [
  {
    question: "プログラミングやロボット製作の未経験者でも大丈夫ですか？",
    answer: "はい、未経験者も大歓迎です！現在のメンバーも多くが未経験からスタートしています。先輩による講習会や、チーム内でのサポート体制が整っていますので、安心してご参加ください。"
  },
  {
    question: "部費はかかりますか？",
    answer: "基本的に部費は徴収していません。ただし、合宿や遠征などの際には実費負担が発生する場合があります。"
  },
  {
    question: "活動頻度はどのくらいですか？",
    answer: "大会の時期や班によって異なりますが、基本的には週3〜4回程度活動しています。大会直前は活動日が増えることもありますが、学業との両立ができるよう柔軟に対応しています。"
  },
  {
    question: "兼部は可能ですか？",
    answer: "可能です。実際に他のサークルやアルバイトと掛け持ちしているメンバーもいます。ただし、大会前などは忙しくなるため、ご自身でのスケジュール管理が重要になります。"
  },
  {
    question: "見学はいつでもできますか？",
    answer: "はい、見学は随時受け付けています！事前にSNSのDMやメールでご連絡いただければ、活動場所への案内や詳しい説明が可能です。飛び入りも歓迎ですが、活動していない時間帯もあるため事前連絡をおすすめします。"
  }
];

export default function ActivitiesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <main className="fade-in">

        <div className="max-w-5xl mx-auto py-24 px-4 md:px-8 lg:px-16">
          <header className="text-center mb-20 pt-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Activities
              <span className="block text-lg font-normal text-orange-600 mt-2 tracking-normal">活動内容</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
               私たちの活動のフィールドは、ロボットコンテストだけではありません。<br/>
               技術を研鑽し、地域と繋がり、未来を創造する様々な活動を行っています。
            </p>
          </header>
        </div>

        {/* --- Full-width Dynamic Sections --- */}
        <section className="relative w-full h-[70vh] overflow-hidden bg-gray-900">
          <div className="sliding-background">
            {[...challengeImages, ...challengeImages].map((src, index) => (
              <div key={index} className="slide-image" style={{ backgroundImage: `url(${src})` }} />
            ))}
          </div>
          <div className="content-overlay">
            <div className="max-w-3xl text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">大会への挑戦</h2>
              <p className="text-lg md:text-xl leading-relaxed">
                私たちの活動の中核は、NHK学生ロボコンと、その先にあるABUアジア・太平洋ロボットコンテストでの優勝です。毎年変わる競技課題に対し、アイデアと技術力で挑戦しています。
              </p>
            </div>
          </div>
        </section>

        <section className="relative w-full h-[70vh] overflow-hidden bg-gray-900">
          <div className="sliding-background-reverse">
            {[...communityImages, ...communityImages].map((src, index) => (
              <div key={index} className="slide-image" style={{ backgroundImage: `url(${src})` }} />
            ))}
          </div>
          <div className="content-overlay">
            <div className="max-w-4xl text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">地域との繋がり</h2>
              <p className="text-lg md:text-xl leading-relaxed">
                私たちは、ものづくりの楽しさを地域社会と分かち合う活動にも力を入れています。地元の企業との交流会を通じて技術的な知見を深めたり、幼稚園の卒園行事に参加して、子どもたちにロボットに触れる機会を提供したりしています。
              </p>
            </div>
          </div>
        </section>

        <div className="py-24 bg-stone-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
              目標とする大会
            </h2>
            {contests.map((contest, index) => (
              <div key={contest.name} className={`flex flex-col gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                <div className="md:w-1/2">
                  <Image src={contest.imageUrl} alt={contest.alt} width={500} height={300} className="rounded-2xl shadow-xl object-cover w-full h-64 md:h-80" />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-4 border-orange-500 inline-block">{contest.name}</h3>
                  <p className="text-lg leading-relaxed text-gray-600">{contest.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <section id="teams" className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
              各班の紹介
            </h2>
            <div className="space-y-24">
              {teams.map((team, index) => (
                <div key={team.name} className={`flex flex-col gap-10 ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                  <div className="md:w-1/2">
                    <Image src={team.imageUrl} alt={team.name} width={500} height={350} className="rounded-2xl shadow-xl object-cover h-64 md:h-80 w-full" />
                  </div>
                  <div className="md:w-1/2 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-orange-600 mb-6">{team.name}</h3>
                    <p className="text-lg leading-relaxed text-gray-600">{team.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* 代表挨拶 */}
        <section className="bg-stone-50 py-24 px-4 md:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">代表挨拶</h2>
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100 flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/3 text-center flex-shrink-0">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <Image src={representative.imageUrl} alt={representative.name} fill className="rounded-full object-cover shadow-lg border-4 border-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{representative.name}</h3>
                <p className="text-orange-600 font-medium">{representative.title}</p>
              </div>
              <div className="md:w-2/3 relative">
                 <svg className="absolute -top-4 -left-4 w-8 h-8 text-gray-200" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.896 14.325 15.939 14.941 15.13C15.557 14.321 16.514 13.916 17.812 13.916L19.344 13.916L19.344 10.957L17.512 10.957C16.275 10.957 15.222 10.45 14.354 9.436C13.486 8.422 13.052 7.151 13.052 5.624L13.052 3L19.568 3L19.568 5.438C19.568 6.444 19.362 7.376 18.95 8.234C18.538 9.092 18.067 9.878 17.537 10.592L21.378 10.592L21.378 21L14.017 21ZM5.00604 21L5.00604 18C5.00604 16.896 5.31404 15.939 5.93004 15.13C6.54604 14.321 7.50204 13.916 8.80104 13.916L10.332 13.916L10.332 10.957L8.50004 10.957C7.26404 10.957 6.21104 10.45 5.34204 9.436C4.47404 8.422 4.04004 7.151 4.04004 5.624L4.04004 3L10.556 3L10.556 5.438C10.556 6.444 10.35 7.376 9.93804 8.234C9.52604 9.092 9.05504 9.878 8.52504 10.592L12.366 10.592L12.366 21L5.00604 21Z"/></svg>
                <p className="text-lg leading-relaxed text-gray-600 italic relative z-10 pl-4">{representative.greeting}</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ セクション */}
        <section id="faq" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">FAQ</h2>
              <p className="text-gray-600">よくある質問</p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-stone-50 rounded-xl border border-stone-200 overflow-hidden hover:shadow-md transition-shadow">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                  >
                    <span className="text-lg font-bold text-gray-900 pr-8">Q. {faq.question}</span>
                    <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white border border-stone-200 text-orange-600 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180 bg-orange-50 border-orange-200' : ''}`}>
                      <svg width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 4l4 4 4-4" />
                      </svg>
                    </span>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed mt-2">
                      <div className="flex gap-3">
                        <span className="font-bold text-orange-600 flex-shrink-0">A.</span>
                        <span>{faq.answer}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
      </main>
    </div>
  );
}
