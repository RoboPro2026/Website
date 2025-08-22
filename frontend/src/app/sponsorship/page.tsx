import React from 'react';
import Image from 'next/image';

const sponsors = [
    { name: 'mjs', src: '/assets/sponser/mjs.png' },
    { name: 'ocs', src: '/assets/sponser/ocs.png' },
    { name: 'tkf', src: '/assets/sponser/tkf.png' },
    { name: 'systecom', src: '/assets/sponser/systecom.png' },
    { name: 'justem', src: '/assets/sponser/justem.png' },
    { name: 'fieldworks', src: '/assets/sponser/fieldworks.png' },
    { name: 'unext', src: '/assets/sponser/unext.png' },
    { name: 'sprix', src: '/assets/sponser/sprix.png' },
    { name: 'noex', src: '/assets/sponser/noex.png' },
    { name: 'tdk', src: '/assets/sponser/tdk.png' },
    { name: 'makita', src: '/assets/sponser/makita.png' }
];

export default function SponsorshipPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-gray-800">
      <main className="py-20 px-4 md:px-8 lg:px-16 fade-in">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-20">
            <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
              スポンサーシップ
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              私たちの活動をご支援ください
            </p>
          </header>

          <section className="mb-24 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">ご支援のお願い</h2>
            <div className="prose prose-lg max-w-none mx-auto">
              <p>
                長岡技術科学大学ロボコンプロジェクトは、学生の技術力向上と創造性の育成を目指し、NHK学生ロボコンやABUロボコンなどの競技会に挑戦しています。
                これらの活動は、皆様からの温かいご支援によって支えられています。
              </p>
              <p>
                私たちの活動にご賛同いただける企業・個人の皆様からのご支援を心よりお待ちしております。
                ご支援いただくことで、学生たちはより高度なロボット開発に挑戦し、将来のエンジニアとして大きく成長することができます。
              </p>
            </div>
          </section>

          <section id="current-sponsors" className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">ご支援いただいている企業様</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
                {sponsors.map(sponsor => (
                  <div key={sponsor.name} className="flex justify-center">
                    <Image 
                      src={sponsor.src} 
                      alt={`スポンサー ${sponsor.name}`}
                      width={150}
                      height={50}
                      className="max-h-16 object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="sponsorship-plans" className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">ご支援プラン</h2>
            <div className="grid md:grid-cols-2 gap-10">
              
              {/* 資金提供プラン */}
              <div className="border border-gray-200 rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-4">資金によるご支援</h3>
                <p className="mb-6">ロボットの部品購入費、加工費、大会への参加費など、活動の基盤となる資金をご支援いただくプランです。</p>
                <h4 className="font-bold mb-2">特典の例:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>当ウェブサイトへのロゴ掲載</li>
                  <li>活動報告書でのご紹介</li>
                  <li>報告会へのご招待</li>
                  <li>ロボット本体へのロゴ貼付（金額に応じて）</li>
                </ul>
              </div>

              {/* 物品提供プラン */}
              <div className="border border-gray-200 rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-4">物品によるご支援</h3>
                <p className="mb-6">モーター、センサー、マイコンボード、工具、PCなど、ロボット開発に必要な物品をご提供いただくプランです。</p>
                <h4 className="font-bold mb-2">特典の例:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>当ウェブサイトへのロゴ掲載</li>
                  <li>ご提供いただいた物品の活用報告</li>
                  <li>活動報告書でのご紹介</li>
                </ul>
              </div>

            </div>
          </section>

          <section id="contact-info" className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">お問い合わせ</h2>
            <p className="prose prose-lg max-w-none mx-auto mb-8">
              スポンサーシップに関するご質問やご相談は、以下の連絡先までお気軽にお問い合わせください。
            </p>
            <div className="inline-block bg-white p-6 rounded-lg shadow-md">
              <p className="text-xl font-semibold">Email: <a href="mailto:robopro.nut@gmail.com" className="text-orange-600 hover:underline">robopro.nut@gmail.com</a></p>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
} 