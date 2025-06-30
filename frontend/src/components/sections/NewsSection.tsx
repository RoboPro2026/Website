import React from "react";
import Link from "next/link";

const newsList = [
  {
    id: "1",
    title: "NHK学生ロボコン2024に出場決定！",
    date: "2024-06-01",
    image: "/assets/news/robocon2024.jpg",
    content: "今年もNHK学生ロボコンに出場します。応援よろしくお願いします！",
    category: "大会情報",
    excerpt: "NHK学生ロボコン2024に出場が決定しました！今年も応援よろしくお願いします。"
  },
  {
    id: "2",
    title: "新入生歓迎会を開催しました",
    date: "2024-04-15",
    image: "/assets/news/welcome.jpg",
    content: "たくさんの新入生が参加してくれました。",
    category: "イベント",
    excerpt: "新入生歓迎会を開催し、多くの新入生が参加してくれました。"
  },
  {
    id: "3",
    title: "スポンサー様ご紹介",
    date: "2024-03-10",
    image: "/assets/news/sponsor.jpg",
    content: "新たに3社のスポンサー様にご支援いただくことになりました。",
    category: "お知らせ",
    excerpt: "新たに3社のスポンサー様にご支援いただくことになりました。"
  },
];

export default function NewsSection() {
  return (
    <section className="py-24 bg-orange-50 border-t-8 border-b-8 border-orange-400" id="news">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-10 text-center">ニュース</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {newsList.map((news) => (
            <Link key={news.id} href={`/news/${news.id}`} className="group z-10">
              <div className="bg-white rounded-xl shadow-md p-0 border-l-4 border-orange-400 flex flex-col h-full overflow-hidden transition-transform group-hover:-translate-y-1 group-hover:shadow-lg">
                <div className="w-full h-40 bg-gray-100 relative">
                  {/* <img src={news.image} alt={news.title} className="object-cover w-full h-full" /> */}
                  <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow font-semibold">{news.category}</span>
                </div>
                <div className="p-5 flex flex-col min-h-[140px] text-black">
                  <span className="text-xs text-gray-400 mb-1 text-black">{news.date}</span>
                  <h3 className="text-lg font-semibold text-black mb-2 line-clamp-2">{news.title}</h3>
                  <p className="text-black text-sm mb-2 line-clamp-3">{news.excerpt}</p>
                  <span className="text-orange-500 text-xs mt-auto font-bold group-hover:underline">続きを読む →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 