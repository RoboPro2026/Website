import React from 'react';
import Image from 'next/image';
import { MOCK_NEWS_LIST } from '@/lib/mock-data';
import { notFound } from 'next/navigation';

// generateStaticParams を使って静的にパスを生成
export async function generateStaticParams() {
  const news = MOCK_NEWS_LIST.data;
  return news.map((article) => ({
    id: article.id.toString(),
  }));
}

// ニュース記事を取得する関数（モック）
function getNewsArticle(id: string) {
  const article = MOCK_NEWS_LIST.data.find((item) => item.id.toString() === id);
  return article;
}

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function NewsArticlePage({ params }: Props) {
  const article = getNewsArticle(params.id);

  if (!article) {
    notFound();
  }

  const { title, content, date, image, category } = article.attributes;
  const imageUrl = image.data?.attributes.url || '/assets/home/hero.png';

  return (
    <div className="min-h-screen bg-white">
      <main className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">

          <article>
            <header className="mb-12 border-b pb-8">
              <p className="text-orange-500 font-semibold mb-2">{category}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {title}
              </h1>
              <p className="mt-4 text-gray-500">{date}</p>
            </header>
            
            <div className="relative w-full h-96 mb-12 rounded-lg overflow-hidden shadow-lg">
              <Image 
                src={imageUrl} 
                alt={title} 
                layout="fill" 
                className="object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              {/* TODO: 本来はMarkdownをHTMLに変換して表示する */}
              <p>{content}</p>
            </div>
          </article>

        </div>
      </main>
    </div>
  );
} 