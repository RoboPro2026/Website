'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { supporters } from '@/lib/sponsors';

export default function SupportersPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div className="min-h-screen bg-stone-50 text-gray-800">
      <main className="py-24 px-4 md:px-8 lg:px-16 fade-in">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-20 pt-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Supporters
              <span className="block text-lg font-normal text-orange-600 mt-2 tracking-normal">ご支援のお願い</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              私たちの活動は、皆様からの温かいご支援によって支えられています。
            </p>
          </header>

          <section className="mb-24 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-orange-500 rounded-full block"></span>
              ご支援のお願い
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
              <p>
                長岡技術科学大学ロボコンプロジェクトは、学生の技術力向上と創造性の育成を目指し、NHK学生ロボコンやABUロボコンなどの競技会に挑戦しています。
              </p>
              <p>
                これらの活動を継続・発展させていくためには、資金や機材、場所など、様々な面でのご支援が不可欠です。
                私たちの活動にご賛同いただける企業・団体・個人の皆様からのご支援を心よりお待ちしております。
              </p>
              <p>
                 ご支援いただくことで、学生たちはより高度なロボット開発に挑戦し、将来のエンジニアとして大きく成長することができます。
              </p>
            </div>
          </section>

          <section id="current-supporters" className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">ご支援いただいている企業様</h2>
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-stone-100">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 items-center">
                {supporters.map(supporter => (
                  <div key={supporter.name} className="flex justify-center transition-all duration-300 hover:scale-110">
                    <Image 
                      src={basePath + supporter.src} 
                      alt={`ご支援企業 ${supporter.name}`}
                      width={160}
                      height={60}
                      className="max-h-20 object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="support-plans" className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">ご支援の種類</h2>
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* 資金提供プラン */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 flex flex-col hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">資金によるご支援</h3>
                <p className="mb-6 text-gray-600 leading-relaxed flex-grow">
                  ロボットの部品購入費、加工費、遠征費など、活動の基盤となる資金をご支援いただく形です。
                  金額の多寡に関わらず、温かいご支援をお願い申し上げます。
                </p>
                <div className="bg-stone-50 p-5 rounded-xl">
                  <h4 className="font-bold mb-2 text-stone-800 text-sm">御礼・特典の例:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600">
                    <li>ウェブサイトへのロゴ掲載</li>
                    <li>活動報告書の送付</li>
                    <li>報告会へのご招待</li>
                    <li>ロボット本体へのロゴ貼付（要相談）</li>
                  </ul>
                </div>
              </div>

              {/* 物品提供プラン */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 flex flex-col hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">物品によるご支援</h3>
                <p className="mb-6 text-gray-600 leading-relaxed flex-grow">
                  モーター、センサー、電子部品、加工工具、PC周辺機器など、ロボット開発に必要な物品・機材をご提供いただく形です。
                </p>
                <div className="bg-stone-50 p-5 rounded-xl">
                   <h4 className="font-bold mb-2 text-stone-800 text-sm">御礼・特典の例:</h4>
                   <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600">
                    <li>ウェブサイトへのロゴ掲載</li>
                    <li>ご提供いただいた物品の活用報告</li>
                    <li>活動報告書の送付</li>
                  </ul>
                </div>
              </div>

            </div>
          </section>

          <section id="contact-info" className="text-center bg-stone-900 text-white p-12 rounded-3xl relative overflow-hidden">
             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('${basePath}/assets/general/pattern.svg')` }} />
             <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">お問い合わせ</h2>
              <p className="text-stone-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                ご支援に関するご質問や、具体的な支援方法のご相談は、<br/>
                お問い合わせページよりご連絡ください。
              </p>
              <Link href="/contact" className="inline-block bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-500 transition-all shadow-lg hover:shadow-orange-500/30">
                 お問い合わせページへ
              </Link>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
