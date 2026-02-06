'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { activeSupporters, type Supporter } from '@/lib/sponsors';

export default function SupportersPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const [shuffledSupporters, setShuffledSupporters] = useState<Supporter[]>([]);

  useEffect(() => {
    const shuffled = [...activeSupporters];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledSupporters(shuffled);
  }, []);

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
              <div className="flex flex-wrap justify-center items-center gap-12">
                {shuffledSupporters.map(supporter => (
                  <div key={supporter.name} className="transition-all duration-300 hover:scale-110">
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
                <p className="mb-4 text-gray-600 leading-relaxed">
                  ロボットの部品購入費、加工費、遠征費など、活動の基盤となる資金をご支援いただく形です。
                  金額の多寡に関わらず、温かいご支援をお願い申し上げます。
                </p>
                
                {/* 税制優遇情報 */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-blue-900 mb-1 text-sm">税制上のメリット</h4>
                      <p className="text-sm text-blue-800 leading-relaxed">
                        長岡技術科学大学への寄付は、<span className="font-bold">税制上の優遇措置</span>の対象となります。
                        法人の場合は寄付金を<span className="font-bold">全額損金算入</span>でき、個人の場合は<span className="font-bold">寄付金控除</span>を受けることができます。
                      </p>
                    </div>
                  </div>
                </div>

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
                <p className="mb-4 text-gray-600 leading-relaxed">
                  モーター、センサー、電子部品、加工工具、PC周辺機器など、ロボット開発に必要な物品・機材をご提供いただく形です。
                </p>

                {/* 物品の具体例 */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-green-900 mb-2 text-sm">ご支援いただきたい物品の例</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm text-green-800">
                        <div>• モーター・アクチュエータ</div>
                        <div>• センサー類</div>
                        <div>• 電子部品・基板</div>
                        <div>• 加工工具</div>
                        <div>• PC・周辺機器</div>
                        <div>• 計測機器</div>
                        <div>• 材料（アルミ材など）</div>
                        <div>• その他機材</div>
                      </div>
                    </div>
                  </div>
                </div>

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

          {/* 個人スポンサー向けセクション */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">個人の皆様へ</h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                学生の挑戦を応援したい。ものづくりの未来を支えたい。<br/>
                そんな想いを持つ個人の皆様からのご支援も心よりお待ちしております。
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 md:p-12 border border-orange-100 shadow-sm">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">温かいご支援をお待ちしています</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      金額の大小に関わらず、皆様からのご支援が学生たちの大きな励みになります。
                      いただいたご支援は、ロボット製作の材料費、部品購入費、大会遠征費などに大切に使わせていただきます。
                    </p>
                  </div>
                </div>

                {/* 税制優遇情報 */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-blue-900 mb-1 text-sm">個人の方も寄付金控除の対象です</h4>
                      <p className="text-sm text-blue-800 leading-relaxed">
                        長岡技術科学大学への寄付は、個人の方も<span className="font-bold">寄付金控除</span>を受けることができます。
                        確定申告の際に控除を申請いただけます。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-orange-200">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-orange-500">✓</span>
                    個人スポンサーの特典
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>活動報告書の送付</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>お名前の掲載（ご希望の方のみ）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>活動見学のご案内</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600 mb-4">
                    ご支援をご検討いただける方は、お気軽にお問い合わせください。
                  </p>
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
