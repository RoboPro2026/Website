import React from "react";
import Link from "next/link";

const blogList = [
  { title: "ロボコン機体設計の裏側", date: "2024-05-20", excerpt: "今年の機体設計で工夫したポイントや苦労話を紹介します。" },
  { title: "新歓イベントレポート", date: "2024-04-18", excerpt: "新入生歓迎会の様子や参加者の声をまとめました。" },
  { title: "電子回路班の活動紹介", date: "2024-03-25", excerpt: "電子回路班の普段の活動や役割について解説します。" },
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-white" id="blog">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">ブログ</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogList.map((blog, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl shadow p-6 border-l-4 border-black/20 flex flex-col gap-2">
              <span className="text-xs text-gray-400">{blog.date}</span>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{blog.title}</h3>
              <p className="text-gray-700 text-sm">{blog.excerpt}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link href="/blog" className="contact-button">
            ブログ一覧へ
          </Link>
        </div>
      </div>
    </section>
  );
} 