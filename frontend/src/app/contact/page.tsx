import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'お問い合わせ | 長岡技術科学大学 ロボコンプロジェクト',
  description: '長岡技術科学大学ロボコンプロジェクトへのお問い合わせページです。見学、入部希望、ご支援、取材のご依頼など、お気軽にご連絡ください。',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-gray-800">
      <main className="py-24 px-4 md:px-8 lg:px-16 fade-in">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-20 pt-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Contact
              <span className="block text-lg font-normal text-orange-600 mt-2 tracking-normal">お問い合わせ</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              見学・入部希望から、ご支援・取材のご依頼まで。<br />
              ロボコンプロジェクトに関するお問い合わせはこちらからお願いいたします。
            </p>
          </header>

          {/* メインの連絡先 */}
          <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100 text-center mb-16">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-600">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">メールでのお問い合わせ</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              お問い合わせは以下のメールアドレスまでお願いいたします。<br />
              内容を確認次第、担当者より返信させていただきます。
            </p>
            <a 
              href="mailto:robopro.nut@gmail.com" 
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-500 transition-all shadow-lg hover:shadow-orange-500/30 text-lg group"
            >
              <span className="mr-2">✉️</span>
              robopro.nut@gmail.com
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </section>

          {/* 目的別の案内 */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* 学生向け */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-sm">🎓</span>
                学生の皆様へ
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                長岡技科大ロボコンプロジェクトでは、いつでも新しい仲間を募集しています！
                見学希望や入部に関する質問は、メールまたはSNSのDMからお気軽にどうぞ。
              </p>
              <ul className="space-y-3">
                <li>
                  <Link href="/activities#faq" className="text-blue-600 hover:text-blue-700 text-sm font-bold flex items-center gap-2 group">
                    よくある質問 (FAQ)
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-blue-600 hover:text-blue-700 text-sm font-bold flex items-center gap-2 group">
                    活動内容について
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* 企業・スポンサー向け */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-sm">🤝</span>
                企業・団体の皆様へ
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                活動をご支援いただけるスポンサー様を募集しております。
                協賛の内容や特典などの詳細は、専用ページをご覧ください。
              </p>
              <Link href="/sponsorship" className="text-green-600 hover:text-green-700 text-sm font-bold flex items-center gap-2 group">
                ご支援・スポンサーについて
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* その他情報 */}
          <section className="border-t border-stone-200 pt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Information</h3>
            
            <div className="grid md:grid-cols-2 gap-8 text-sm">
              <div className="space-y-4">
                <h4 className="font-bold text-gray-900 text-base">活動場所</h4>
                <div className="bg-white p-6 rounded-xl border border-stone-100">
                  <p className="font-bold mb-2">長岡技術科学大学</p>
                  <p className="text-gray-600 mb-1">〒940-2188 新潟県長岡市上富岡町1603-1</p>
                  <p className="text-gray-600">
                    機械建設棟 2F / セコムホール<br />
                    (キャンパスマップなどのリンクがあればここに)
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-gray-900 text-base">SNS</h4>
                <div className="bg-white p-6 rounded-xl border border-stone-100 flex flex-col gap-4">
                  <a href="https://x.com/nut_robopro" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors">
                    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H4.58l4.74 6.236L18.244 2.25zM16.828 19.75h1.54l-6.052-8.08-1.42-1.88L5.4 4.25h-1.54l6.052 8.08 1.42 1.88L16.828 19.75z"/></svg>
                    </div>
                    <span className="font-bold">X (Twitter)</span>
                    <span className="text-gray-400 ml-auto text-xs">@nut_robopro</span>
                  </a>
                  <a href="https://instagram.com/nut_robopro/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-pink-600 transition-colors">
                    <div className="w-8 h-8 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white rounded-full flex items-center justify-center">
                       <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.59c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                       </svg>
                    </div>
                    <span className="font-bold">Instagram</span>
                    <span className="text-gray-400 ml-auto text-xs">@nut_robopro</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

