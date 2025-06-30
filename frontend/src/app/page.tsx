import Image from "next/image";
import NewsSection from "@/components/sections/NewsSection";
import BlogSection from "@/components/sections/BlogSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-orange-50">
      {/* ヘッダー */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-orange-200 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-orange-600">長岡技科大ロボコンプロジェクト</h1>
            </div>
            <nav className="hidden md:flex space-x-12">
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">サークルについて</a>
              <a href="#activities" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">活動内容</a>
              <a href="#members" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">メンバー</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">お問い合わせ</a>
            </nav>
          </div>
        </div>
      </header>

      {/* ヒーローセクション（全画面・画像固定/範囲限定） */}
      <section className="relative w-full h-screen min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* ヒーローセクション内だけでfixed画像を表示 */}
        <div className="pointer-events-none fixed top-0 left-0 w-full h-screen z-0" style={{clipPath: 'inset(0 0 0 0)'}}>
          <Image
            src="/assets/home/hero.png"
            alt="サークル活動の様子"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        {/* テキストは通常フローで中央に */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-5xl md:text-7xl font-soko font-bold text-white drop-shadow-lg text-center leading-tight">
            やるぞ、<br />
            <span className="text-orange-400">ロボコン</span>
          </h1>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
          <span className="text-white text-lg mb-1">SCROLL</span>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white animate-bounce" viewBox="0 0 24 24"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
        </div>
      </section>

      {/* サークルについて */}
      <section id="about" className="py-24 bg-gradient-to-r from-orange-600 to-orange-700 text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">サークルについて</h2>
            <p className="text-xl text-orange-100 max-w-4xl mx-auto leading-relaxed">
              長岡技科大ロボコンプロジェクトは、NHK学生ロボコンやABUロボコンでの優勝を目指し、ロボットの設計・製作・制御・プログラミングに日々取り組んでいる学部生による学生団体です。ものづくりやチームワークを通じて成長できる環境です。初心者も大歓迎！
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl text-orange-600">🎯</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">目標</h3>
              <p className="text-orange-100 leading-relaxed">NHK学生ロボコン・ABUロボコンでの優勝を目指しています。</p>
            </div>
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl text-orange-600">🤖</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">活動</h3>
              <p className="text-orange-100 leading-relaxed">ロボットの設計・製作・プログラミング、技術交流、新歓イベントなど。</p>
            </div>
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl text-orange-600">👥</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">メンバー</h3>
              <p className="text-orange-100 leading-relaxed">学部1年生から4年生まで在籍。初心者も経験者も大歓迎です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 活動内容 */}
      <section id="activities" className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">活動内容</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              私たちの主な活動内容
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-10 rounded-2xl shadow-lg border-l-4 border-orange-600 hover:shadow-xl transition-all duration-300">
              <h3 className="text-3xl font-semibold mb-6 text-gray-900">ロボット製作</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                ロボットの設計・製作・プログラミング・制御を行い、NHK学生ロボコンやABUロボコンに挑戦しています。
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1 text-xl font-bold">•</span>
                  <span>ロボット設計・機械加工</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1 text-xl font-bold">•</span>
                  <span>電子回路・制御・プログラミング</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1 text-xl font-bold">•</span>
                  <span>チームビルディング・作業会</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-10 rounded-2xl shadow-lg border-l-4 border-orange-600 hover:shadow-xl transition-all duration-300">
              <h3 className="text-3xl font-semibold mb-6 text-gray-900">イベント・交流</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                新歓イベントや技術交流会、合宿なども開催し、メンバー同士の親睦を深めています。
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1 text-xl font-bold">•</span>
                  <span>新歓イベント</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1 text-xl font-bold">•</span>
                  <span>技術交流会</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1 text-xl font-bold">•</span>
                  <span>合宿</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ニュース */}
      <NewsSection />

      {/* メンバー */}
      <section id="members" className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">メンバー</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              学部1年生から4年生まで、機械・電気・情報・制御など多様な分野の学部生が協力し合い、ロボコンに挑戦しています。
              初心者も大歓迎！先輩が丁寧にサポートします。
            </p>
          </div>
        </div>
      </section>

      {/* ブログ */}
      <BlogSection />

      {/* スポンサー一覧 */}
      <section id="sponsor" className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">スポンサー</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              長岡技科大ロボコンプロジェクトは、以下のスポンサー企業・団体の皆様からご支援をいただいています。<br />
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center">
            <img src="/assets/sponser/mjs.png" alt="スポンサー mjs" className="h-16 object-contain" />
            <img src="/assets/sponser/ocs.png" alt="スポンサー ocs" className="h-16 object-contain" />
            <img src="/assets/sponser/tkf.png" alt="スポンサー tkf" className="h-16 object-contain" />
            <img src="/assets/sponser/systecom.png" alt="スポンサー systecom" className="h-16 object-contain" />
            <img src="/assets/sponser/justem.png" alt="スポンサー justem" className="h-16 object-contain" />
            <img src="/assets/sponser/fieldworks.png" alt="スポンサー fieldworks" className="h-16 object-contain" />
            <img src="/assets/sponser/unext.png" alt="スポンサー unext" className="h-16 object-contain" />
            <img src="/assets/sponser/sprix.png" alt="スポンサー sprix" className="h-16 object-contain" />
            <img src="/assets/sponser/noex.png" alt="スポンサー noex" className="h-16 object-contain" />
            <img src="/assets/sponser/tdk.png" alt="スポンサー tdk" className="h-16 object-contain" />
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section id="contact" className="py-24 bg-gradient-to-br from-orange-100 to-orange-200 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">お問い合わせ</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            入部希望・見学希望・スポンサー等のお問い合わせはSNS・メールまたは下のお問い合わせのフォームよりご連絡ください。
          </p>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="text-center bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">連絡先</h3>
              <div className="space-y-3 text-gray-700">
                <p>Email: example@example.com</p>
                <p>Twitter: @example</p>
                <p>Instagram: @example</p>
              </div>
            </div>
            <div className="text-center bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">活動場所</h3>
              <div className="space-y-3 text-gray-700">
                <p>長岡技術科学大学 機械建設棟 2F</p>
                <p>長岡技術科学大学 セコムホール</p>
              </div>
            </div>
          </div>
          <button className="bg-orange-600 text-white px-12 py-4 rounded-lg hover:bg-orange-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            お問い合わせフォーム
          </button>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-orange-800 to-orange-900 text-white py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">長岡技科大ロボコンプロジェクト</h3>
            <p className="text-orange-200 mb-8">
              学生ロボコン・ABUロボコンでの優勝を目指して活動しています。
            </p>
            <div className="border-t border-orange-700 pt-8">
              <p className="text-orange-300">
                © 2024 長岡技科大ロボコンプロジェクト. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
