"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Entry, Tag } from 'contentful';
import { fetchContentful, fetchAllTags } from '@/lib/api';
import { NewsEntry } from '@/types/cms';

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

        setNewsList(newsItemsWithResolvedTags as unknown as (Entry<NewsEntry> & { metadata: { tags: Tag[] } })[]);
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
      <div className="min-h-screen bg-stone-50 text-gray-800 flex items-center justify-center">
         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 text-gray-800">
      <main className="py-24 px-4 md:px-8 lg:px-16 fade-in">
        <div className="max-w-7xl mx-auto">
          <header className="mb-20 pt-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              News
              <span className="block text-lg font-normal text-orange-600 mt-2 tracking-normal">ニュース一覧</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              ロボコンプロジェクトの最新情報、活動報告、イベント告知などをお届けします。
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsList.map((news) => (
              <Link key={news.sys.id} href={`/news/${news.sys.id}`} className="group block h-full">
                <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 overflow-hidden h-full flex flex-col group-hover:-translate-y-1">
                  <div className="w-full h-56 relative overflow-hidden">
                      <Image 
                      src={(news.fields.image as any)?.fields?.file ? `https:${(news.fields.image as any).fields.file.url}` : '/assets/home/hero.png'}
                      alt={String(news.fields.title)} 
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
                      {news.metadata.tags.map((tag) => (
                      <span key={tag.sys.id} className="bg-white/90 backdrop-blur-sm text-orange-600 text-xs px-3 py-1 rounded-full shadow-sm font-bold tracking-wide">
                        {(tag as any).name}
                      </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex-grow flex flex-col">
                    <time className="text-sm text-stone-400 mb-3 font-medium block">
                      {new Date(String(news.fields.date)).toLocaleDateString('ja-JP')}
                    </time>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight group-hover:text-orange-600 transition-colors">
                      {String(news.fields.title)}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base line-clamp-3 mb-6 flex-grow leading-relaxed">
                      {String(news.fields.context)}
                    </p>
                    <div className="mt-auto flex items-center text-orange-600 font-bold text-sm">
                      READ MORE
                      <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
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
