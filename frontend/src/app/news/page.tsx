import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MOCK_NEWS_LIST } from '@/lib/mock-data';

export default function NewsListPage() {
  // モックデータを取得
  const newsList = MOCK_NEWS_LIST.data;

  return (
    <div className="min-h-screen bg-stone-50 text-gray-800">
      <main className="py-20 px-4 md:px-8 lg:px-16 fade-in">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-20">
            <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
              ニュース一覧
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              最新のお知らせや活動報告
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsList.map(({ id, attributes: news }) => (
              <Link key={id} href={`/news/${id}`} className="group block">
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 h-full flex flex-col">
                  <div className="w-full h-48 relative">
                    <Image 
                      src={news.image.data?.attributes.url || '/assets/home/hero.png'} 
                      alt={news.title} 
                      layout="fill" 
                      className="object-cover" 
                    />
                    <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow font-semibold">{news.category}</span>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <p className="text-sm text-stone-500 mb-2">{news.date}</p>
                    <h3 className="text-xl font-bold text-stone-800 mb-3 line-clamp-2 leading-tight flex-grow">{news.title}</h3>
                    <p className="text-stone-600 text-base line-clamp-3 mb-4">{news.excerpt}</p>
                    <span className="text-orange-500 font-semibold group-hover:underline mt-auto">
                      続きを読む
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
