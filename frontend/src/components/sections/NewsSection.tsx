"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Entry, Tag } from "contentful";
import { fetchContentful, fetchAllTags } from "@/lib/api";
import { NewsEntry } from "@/types/cms";

export default function NewsSection() {
  const [newsList, setNewsList] = useState<(Entry<NewsEntry> & { metadata: { tags: Tag[] } })[]>([]);
  
  useEffect(() => {
    async function getNews() {
      const [newsResponse, allTags] = await Promise.all([
        fetchContentful('clubNews', {
          limit: 3,
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
          .map(tagLink => tagMap.get(tagLink.sys.id))
          .filter(Boolean) as Tag[];
        
        return {
          ...item,
          metadata: { ...item.metadata, tags: resolvedTags }
        };
      });

      setNewsList(newsItemsWithResolvedTags as unknown as (Entry<NewsEntry> & { metadata: { tags: Tag[] } })[]);
    }
    getNews();
  }, []);

  if (!newsList.length) {
    return (
      <section className="py-28 bg-stone-50" id="news">
        <div className="section-container text-center">
          <p>ニュース記事を読み込んでいます...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-28 bg-stone-50" id="news">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title text-stone-800">ニュース</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsList.map((news) => (
            <Link key={news.sys.id} href={`/news/${news.sys.id}`} className="group block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 h-full">
                <div className="w-full h-48 relative">
                    <Image 
                    src={(news.fields.image as any)?.fields?.file ? `https:${(news.fields.image as any).fields.file.url}` : '/assets/home/hero.png'}
                    alt={news.fields.title as unknown as string}
                    fill
                    className="object-cover" 
                  />
                  <div className="absolute top-3 right-3 flex gap-2">
                    {news.metadata.tags.map((tag) => (
                      <span key={tag.sys.id} className="bg-orange-500 text-white text-sm px-3 py-1 rounded-full shadow font-semibold">{(tag as unknown as { name: string }).name}</span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-stone-500 mb-2">{new Date(news.fields.date as unknown as string).toLocaleDateString('ja-JP')}</p>
                  <h3 className="text-xl font-bold text-stone-800 mb-3 line-clamp-2 leading-tight">{news.fields.title as unknown as string}</h3>
                  <p className="text-stone-600 text-base line-clamp-3 mb-4">{news.fields.context as unknown as string}</p>
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