'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { fetchContentful, fetchAllTags } from '@/lib/api';
import { Entry, Tag, EntrySkeletonType } from 'contentful';

const SocialIcon = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
    {children}
  </a>
);

export default function Footer() {
  const [recentNews, setRecentNews] = useState<Entry<EntrySkeletonType>[]>([]);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  useEffect(() => {
    async function getRecentNews() {
      try {
        const [newsResponse, allTags] = await Promise.all([
          fetchContentful('clubNews', { limit: 5, order: ['-fields.date'] }),
          fetchAllTags()
        ]);

        const tagMap = new Map<string, Tag>();
        for (const tag of allTags) {
          tagMap.set(tag.sys.id, tag);
        }

        const newsWithTags = newsResponse.items.map((news: Entry<EntrySkeletonType>) => ({
          ...news,
          metadata: {
            ...news.metadata,
            tags: news.metadata?.tags
              ?.map((tagLink) => tagMap.get(tagLink.sys.id))
              .filter(Boolean) as Tag[] || []
          }
        })) as unknown as Entry<EntrySkeletonType>[];

        setRecentNews(newsWithTags.slice(0, 5));
      } catch (error) {
        console.error('Error fetching news for footer:', error);
      }
    }

    getRecentNews();
  }, []);

  return (
    <footer className="new-footer">
      <div className="new-footer-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Logo and Social */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image src={basePath + "/assets/general/logo-w.png"} alt="ロボコンプロジェクト ロゴ" width={180} height={40} className="object-contain" />
            </Link>
            <div className="flex space-x-4">
              <SocialIcon href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c-4.87 0-8.775 3.905-8.775 8.775s3.905 8.775 8.775 8.775c4.87 0 8.775-3.905 8.775-8.775S17.185 2 12.315 2zM8.75 12.315c0-1.97 1.6-3.57 3.565-3.57s3.565 1.6 3.565 3.57-1.6 3.57-3.565 3.57-3.565-1.6-3.565-3.57zM19.38 7.56a1.29 1.29 0 01-1.29-1.29 1.29 1.29 0 011.29-1.29 1.29 1.29 0 011.29 1.29 1.29 1.29 0 01-1.29 1.29z" clipRule="evenodd" /></svg>
              </SocialIcon>
              <SocialIcon href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </SocialIcon>
              <SocialIcon href="https://x.com/nut_robopro">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H4.58l4.74 6.236L18.244 2.25zM16.828 19.75h1.54l-6.052-8.08-1.42-1.88L5.4 4.25h-1.54l6.052 8.08 1.42 1.88L16.828 19.75z" /></svg>
              </SocialIcon>
            </div>
          </div>
          
          {/* Column 2: About */}
          <div>
            <h3 className="new-footer-heading">活動について</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="new-footer-link">団体概要</Link></li>
              <li><Link href="/activities" className="new-footer-link">活動内容</Link></li>
              <li><Link href="/about#recruitment" className="new-footer-link">メンバー募集</Link></li>
            </ul>
          </div>

          {/* Column 3: Project */}
          <div>
            <h3 className="new-footer-heading">プロジェクト</h3>
            <ul className="space-y-3">
              <li><Link href="/news" className="new-footer-link">ニュース</Link></li>
              <li><Link href="/sponsorship" className="new-footer-link">ご支援のお願い</Link></li>
              <li><Link href="/contact" className="new-footer-link">お問い合わせ</Link></li>
            </ul>
          </div>

          {/* Column 4: Recent News */}
          <div>
            <h3 className="new-footer-heading">最近のニュース</h3>
            <ul className="space-y-3">
              {recentNews.map((news) => (
                <li key={news.sys.id}>
                  <Link href={`/news/${news.sys.id}`} className="new-footer-link line-clamp-2">
                    {String(news.fields.title)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} 長岡技科大ロボコンプロジェクト. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
