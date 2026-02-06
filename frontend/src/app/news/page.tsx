"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Entry, Tag, Asset } from 'contentful';
import { fetchContentful, fetchAllTags } from '@/lib/api';
import { NewsEntry } from '@/types/cms';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';

export default function NewsListPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const [newsList, setNewsList] = useState<(Entry<NewsEntry> & { metadata: { tags: Tag[] } })[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedArticle, setSelectedArticle] = useState<Entry | null>(null);
  const [articleLoading, setArticleLoading] = useState(false);

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

  // ハッシュからIDを取得して記事を読み込む
  useEffect(() => {
    const handleHashChange = async () => {
      const hash = window.location.hash;
      console.log('Hash changed:', hash);
      const match = hash.match(/#id=(.+)/);
      
      if (match && match[1]) {
        const id = match[1];
        console.log('Loading article with ID:', id);
        setArticleLoading(true);
        
        try {
          const [newsResponse, allTags] = await Promise.all([
            fetchContentful('clubNews'),
            fetchAllTags()
          ]);
          
          const article = newsResponse.items.find((item: Entry) => item.sys.id === id);
          
          console.log('Article found:', article ? 'Yes' : 'No');
          
          if (article) {
            const tagMap = new Map<string, Tag>();
            for (const tag of allTags) {
              tagMap.set(tag.sys.id, tag);
            }

            const resolvedTags = article.metadata?.tags
              ?.map((tagLink: any) => tagMap.get(tagLink.sys.id))
              .filter(Boolean) as Tag[] || [];

            setSelectedArticle({
              ...article,
              metadata: { ...article.metadata, tags: resolvedTags }
            });
            console.log('Selected article set:', article.fields.title);
          } else {
            console.log('Article not found with ID:', id);
          }
        } catch (error) {
          console.error('Error loading article:', error);
        } finally {
          setArticleLoading(false);
        }
      } else {
        setSelectedArticle(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const goBack = () => {
    window.location.hash = '';
  };

  console.log('Current state:', { loading, selectedArticle: selectedArticle?.sys.id });

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50 text-gray-800 flex items-center justify-center">
         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  // 記事詳細表示
  if (selectedArticle) {
    const { title, context, content, date, image } = selectedArticle.fields;
    const imageUrl = (image as unknown as Asset)?.fields?.file?.url ? `https:${(image as unknown as Asset).fields.file?.url}` : basePath + '/assets/home/hero.png';
    const tags = selectedArticle.metadata?.tags || [];

    return (
      <div className="min-h-screen bg-white">
        <main className="py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-3xl mx-auto">
            {/* 戻るボタン */}
            <button
              onClick={goBack}
              className="mb-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              ニュース一覧に戻る
            </button>

            {articleLoading ? (
              <div className="py-20 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
              </div>
            ) : (
              <article>
                <header className="mb-12 border-b pb-8">
                  <div className="flex gap-2 mb-2">
                    {tags.map((tag: Tag) => (
                      <span key={tag.sys.id} className="bg-orange-500 text-white text-sm px-3 py-1 rounded-full shadow font-semibold">
                        {tag.name}
                      </span>
                    ))}
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    {title as string}
                  </h1>
                  <p className="mt-4 text-gray-500">{new Date(date as string).toLocaleDateString('ja-JP')}</p>
                </header>
                
                <div className="relative w-full h-96 mb-12 rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src={imageUrl} 
                    alt={title as string} 
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-a:text-orange-600 prose-a:hover:text-orange-700">
                  {content ? (
                    <div className="contentful-rich-text">
                      {documentToReactComponents(content as Document)}
                    </div>
                  ) : (
                    <ReactMarkdown 
                      remarkPlugins={[remarkGfm]}
                      components={{
                        h1: ({children}) => <h1 className="text-3xl font-bold text-gray-900 mb-6 mt-8">{children}</h1>,
                        h2: ({children}) => <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-6">{children}</h2>,
                        h3: ({children}) => <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-5">{children}</h3>,
                        p: ({children}) => <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>,
                        ul: ({children}) => <ul className="list-disc pl-6 mb-4 text-gray-700">{children}</ul>,
                        ol: ({children}) => <ol className="list-decimal pl-6 mb-4 text-gray-700">{children}</ol>,
                        li: ({children}) => <li className="mb-2">{children}</li>,
                        a: ({children, href}) => <a href={href} className="text-orange-600 hover:text-orange-700 underline">{children}</a>,
                        blockquote: ({children}) => <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-600 my-4">{children}</blockquote>,
                        code: ({children}) => <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{children}</code>,
                        pre: ({children}) => <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>,
                      }}
                    >
                      {context as string}
                    </ReactMarkdown>
                  )}
                </div>
              </article>
            )}
          </div>
        </main>
      </div>
    );
  }

  // ニュース一覧表示
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

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
            </div>
          ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsList.map((news) => (
              <a key={news.sys.id} href={`#id=${news.sys.id}`} className="group block h-full">
                <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 overflow-hidden h-full flex flex-col group-hover:-translate-y-1">
                  <div className="w-full h-56 relative overflow-hidden">
                      <Image 
                      src={(news.fields.image as unknown as Asset)?.fields?.file?.url ? `https:${(news.fields.image as unknown as Asset).fields.file?.url}` : basePath + '/assets/home/hero.png'}
                      alt={String(news.fields.title)} 
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
                      {news.metadata.tags.map((tag) => (
                        <span key={tag.sys.id} className="bg-white/90 backdrop-blur-sm text-orange-600 text-xs px-3 py-1 rounded-full shadow-sm font-bold tracking-wide">
                        {(tag as unknown as Tag).name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex-grow flex flex-col">
                    <time className="text-sm text-stone-400 mb-3 font-medium block">
                      {new Date(String(news.fields.date)).toLocaleDateString('ja-JP')}
                    </time>
                    <h3 className="text-xl font-bold text-gray-900 mb-6 line-clamp-2 leading-tight group-hover:text-orange-600 transition-colors flex-grow">
                      {String(news.fields.title)}
                    </h3>
                    <div className="mt-auto flex items-center text-orange-600 font-bold text-sm">
                      READ MORE
                      <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          )}

        </div>
      </main>
    </div>
  );
}
