import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MOCK_NEWS_LIST } from "@/lib/mock-data";

// basePathを考慮した画像パスの生成
const getAssetPath = (path: string) => {
  // GitHub Pagesの場合、basePathは/Website
  return `/Website${path}`;
};

export default function NewsSection() {
  const newsList = MOCK_NEWS_LIST.data.slice(0, 3); // トップページには最新3件のみ表示

  return (
    <section className="py-28 bg-stone-50" id="news">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title text-stone-800">ニュース</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsList.map(({ id, attributes: news }) => (
            <Link key={id} href={`/news/${id}`} className="group block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 h-full">
                <div className="w-full h-48 relative">
                  <Image 
                    src={news.image.data?.attributes.url || getAssetPath('/assets/home/hero.png')} 
                    alt={news.title} 
                    layout="fill" 
                    className="object-cover" 
                  />
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