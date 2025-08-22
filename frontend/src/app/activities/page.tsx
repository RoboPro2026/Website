import React from 'react';
import Image from 'next/image';

const representative = {
  name: "五十嵐 幸多",
  title: "代表",
  greeting: `いい感じのこめんと(ちょっと長め)。`,
  imageUrl: "/assets/home/hero.png" // Placeholder
};

const challengeImages = [
  '/assets/news/robocon2024.jpg',
  '/assets/home/hero.png',
  '/assets/news/sponsor.jpg',
  '/assets/home/hero.png'
];
const communityImages = [
  '/assets/news/welcome.jpg',
  '/assets/home/hero.png',
  '/assets/sponser/tdk.png',
  '/assets/home/hero.png'
];

const teams = [
  {
    name: '機械班',
    description: 'ロボットの”身体”を作るエキスパート。3DCADによる設計から、工作機械を駆使した部品製作まで、アイデアを物理的な形にする役割を担います。',
    imageUrl: "/assets/home/hero.png" // Placeholder
  },
  {
    name: '回路班',
    description: 'ロボットの”神経”を司る電子回路のプロフェッショナル。モータードライバやセンサー基板の設計・製作を行い、ロボットに命を吹き込みます。',
    imageUrl: "/assets/home/hero.png" // Placeholder
  },
  {
    name: '制御班',
    description: 'ロボットの”頭脳”を開発するプログラマー集団。マイコンのプログラミングやAIによる画像認識など、ソフトウェアでロボットの動きを制御します。',
    imageUrl: "/assets/home/hero.png" // Placeholder
  },
  {
    name: '運営班',
    description: 'プロジェクト全体を支える縁の下の力持ち。スポンサー渉外、広報活動、会計管理など、円滑なプロジェクト運営に不可欠な役割を担います。',
    imageUrl: "/assets/home/hero.png" // Placeholder
  }
];

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <main className="fade-in">

        <div className="max-w-5xl mx-auto py-20 px-4 md:px-8 lg:px-16">
          <header className="text-center mb-20">
            <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
              活動内容
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              私たちの活動について紹介します。
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
                私たちの活動の中核は、NHK学生ロボコンと、その先にあるABUアジア・太平洋ロボットコンテストでの優勝です。毎年変わる競技課題に対し、独創的なアイデアと確かな技術力で挑戦しています。
              </p>
            </div>
          </div>
        </section>

        <section className="relative w-full h-[70vh] overflow-hidden bg-gray-900">
          <div className="sliding-background-reverse">
            {[...communityImages, ...communityImages].map((src, index) => (
              <div key={index} className="slide-image-reverse" style={{ backgroundImage: `url(${src})` }} />
            ))}
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <div className="text-center text-white px-4 md:px-8 lg:px-16 max-w-4xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">地域との繋がり</h2>
              <p className="text-lg md:text-xl leading-relaxed">
                私たちは、ものづくりの楽しさを地域社会と分かち合う活動にも力を入れています。地元の企業との交流会を通じて技術的な知見を深めたり、幼稚園の卒園行事に参加して、子どもたちにロボットに触れる機会を提供したりしています。
              </p>
            </div>
          </div>
        </section>

        <div className="py-20 bg-stone-50">
          <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-lg shadow-xl p-8 transition-transform duration-300 hover:-translate-y-2">
              <Image src="/assets/home/hero.png" alt="NHK学生ロボコン ロゴ" width={250} height={125} className="mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-center mb-4">NHK学生ロボコン</h3>
              <p className="text-left leading-relaxed text-gray-600">
                NHKが主催する、全国の大学が参加するロボットコンテストです。毎年異なる競技課題が設定され、学生たちの独創的なアイデアと技術力が試されます。この大会で優勝したチームが、日本代表としてABUロボコンへの出場権を得ます。
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-8 transition-transform duration-300 hover:-translate-y-2">
              <Image src="/assets/home/hero.png" alt="ABUロボコン ロゴ" width={250} height={125} className="mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-center mb-4">ABUロボコン</h3>
              <p className="text-left leading-relaxed text-gray-600">
                アジア・太平洋地域の放送局が共同で制作する国際的なロボットコンテストです。各国の国内大会を勝ち抜いた代表チームが一堂に会し、技術力とアイデアを競い合います。私たちにとって、世界一を目指すための最高の舞台です。
              </p>
            </div>
          </div>
        </div>

        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <section id="teams" className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">
              各班の紹介
            </h2>
            <div className="space-y-20">
              {teams.map((team, index) => (
                <div key={team.name} className={`flex flex-col gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                  <div className="md:w-1/2">
                    <Image src={team.imageUrl} alt={team.name} width={500} height={350} className="rounded-lg shadow-xl object-cover" />
                  </div>
                  <div className="md:w-1/2 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-orange-600 mb-4">{team.name}</h3>
                    <p className="text-lg mb-6">{team.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* 代表挨拶 */}
        <section className="bg-stone-50 py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title text-gray-900 mb-8">代表挨拶</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 text-center">
                <Image src={representative.imageUrl} alt={representative.name} width={200} height={200} className="rounded-full mx-auto shadow-lg" />
                <h3 className="text-2xl font-bold mt-4">{representative.name}</h3>
                <p className="text-gray-600">{representative.title}</p>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg whitespace-pre-line leading-relaxed">{representative.greeting}</p>
              </div>
            </div>
          </div>
        </section>
        
      </main>
    </div>
  );
}
