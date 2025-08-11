import React from "react";
import Link from "next/link";
import Image from "next/image";

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
    <section className="py-28 bg-stone-50" id="news">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title text-stone-800">ニュース</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsList.map((news) => (
            <Link key={news.id} href={`/news/${news.id}`} className="group block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 h-full">
                <div className="w-full h-48 relative">
                  <Image src={news.image || '/assets/home/hero.png'} alt={news.title} layout="fill" className="object-cover" />
                  <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow font-semibold">{news.category}</span>
                </div>
                <div className="p-6">
                  <p className="text-sm text-stone-500 mb-2">{news.date}</p>
                  <h3 className="text-xl font-bold text-stone-800 mb-3 line-clamp-2 leading-tight">{news.title}</h3>
                  <p className="text-stone-600 text-base line-clamp-3 mb-4">{news.excerpt}</p>
                  <span className="text-orange-500 font-semibold group-hover:underline">
                    続きを読む
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link href="/news" className="contact-button">
            ニュース一覧へ
          </Link>
        </div>
      </div>
    </section>
  );
} 