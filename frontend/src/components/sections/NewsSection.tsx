import React from "react";

const newsList = [
  { title: "NHK学生ロボコン2024に出場決定！", date: "2024-06-01", content: "今年もNHK学生ロボコンに出場します。応援よろしくお願いします！" },
  { title: "新入生歓迎会を開催しました", date: "2024-04-15", content: "たくさんの新入生が参加してくれました。" },
  { title: "スポンサー様ご紹介", date: "2024-03-10", content: "新たに3社のスポンサー様にご支援いただくことになりました。" },
];

export default function NewsSection() {
  return (
    <section className="py-20 bg-gray-50" id="news">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-10 text-center">ニュース</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {newsList.map((news, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-400 flex flex-col gap-2">
              <span className="text-xs text-gray-400">{news.date}</span>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{news.title}</h3>
              <p className="text-gray-700 text-sm">{news.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 