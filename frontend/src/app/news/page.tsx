"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Entry, Tag } from 'contentful';
import { fetchContentful, fetchAllTags } from '@/lib/api';
import { NewsEntry, NewsEntryFields } from '@/types/cms';

export default function NewsListPage() {
  const [newsList, setNewsList] = useState<(Entry<NewsEntry> & { metadata: { tags: Tag[] } })[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getNews() {
      try {
        const [newsResponse, allTags] = await Promise.all([
          fetchContentful('clubNews', {
            order: '-fields.date',
          }),
          fetchAllTags()
        ]);

        const tagMap = new Map<string, Tag>();
        for (const tag of allTags) {
          tagMap.set(tag.sys.id, tag);
        }

        const newsItemsWithResolvedTags = newsResponse.items.map(item => {
          const resolvedTags = item.metadata?.tags
            ?.map(tagLink => tagMap.get(tagLink.sys.id))
            .filter(Boolean) as Tag[] || [];
          
          return {
            ...item,
            metadata: { ...item.metadata, tags: resolvedTags }
          };
        });

        setNewsList(newsItemsWithResolvedTags as any);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    }
    getNews();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50 text-gray-800">
        <main className="py-20 px-4 md:px-8 lg:px-16 fade-in">
          <div className="max-w-5xl mx-auto text-center">
            <p>ニュース記事を読み込んでいます...</p>
          </div>
        </main>
      </div>
    );
  }

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
            {newsList.map((news) => (
              <Link key={news.sys.id} href={`/news/${news.sys.id}`} className="group block">
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 h-full flex flex-col">
                  <div className="w-full h-48 relative">
                    <Image 
                      src={(news.fields.image as any)?.fields?.file ? `https:${(news.fields.image as any).fields.file.url}` : '/assets/home/hero.png'}
                      alt={news.fields.title as unknown as string} 
                      layout="fill" 
                      className="object-cover" 
                    />
                    <div className="absolute top-3 right-3 flex gap-2">
                      {news.metadata.tags.map((tag) => (
                        <span key={tag.sys.id} className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow font-semibold">
                          {(tag as any).name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <p className="text-sm text-stone-500 mb-2">{new Date(news.fields.date as unknown as string).toLocaleDateString('ja-JP')}</p>
                    <h3 className="text-xl font-bold text-stone-800 mb-3 line-clamp-2 leading-tight flex-grow">{news.fields.title as unknown as string}</h3>
                    <p className="text-stone-600 text-base line-clamp-3 mb-4">{news.fields.context as unknown as string}</p>
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
