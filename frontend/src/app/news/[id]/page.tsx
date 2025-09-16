import React from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Entry, Tag } from 'contentful';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { fetchContentful, fetchAllTags } from '@/lib/api';
import { NewsEntry, NewsEntryFields } from '@/types/cms';
import { notFound } from 'next/navigation';

// generateStaticParams を使って静的にパスを生成
export async function generateStaticParams() {
  try {
    const newsResponse = await fetchContentful('clubNews');
    return newsResponse.items.map((article: any) => ({
      id: article.sys.id,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// ニュース記事を取得する関数（Contentful）
async function getNewsArticle(id: string) {
  try {
    const [newsResponse, allTags] = await Promise.all([
      fetchContentful('clubNews'),
      fetchAllTags()
    ]);
    
    const article = newsResponse.items.find((item: any) => item.sys.id === id);
    if (!article) return null;

    // タグ情報を解決
    const tagMap = new Map<string, Tag>();
    for (const tag of allTags) {
      tagMap.set(tag.sys.id, tag);
    }

    const resolvedTags = article.metadata?.tags
      ?.map((tagLink: any) => tagMap.get(tagLink.sys.id))
      .filter(Boolean) as Tag[] || [];

    return {
      ...article,
      metadata: { ...article.metadata, tags: resolvedTags }
    };
  } catch (error) {
    console.error('Error fetching news article:', error);
    return null;
  }
}

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function NewsArticlePage({ params }: Props) {  const { id } = await params;
  const article = await getNewsArticle(id);

  if (!article) {
    notFound();
  }

  const { title, context, content, date, image } = article.fields as any;
  const imageUrl = image?.fields?.file ? `https:${image.fields.file.url}` : '/assets/home/hero.png';
  const tags = article.metadata?.tags || [];
  
  // contentフィールドがある場合はリッチテキスト、ない場合はcontextをMarkdownとして表示
  const articleContent = content ? documentToReactComponents(content) : context;

  return (
    <div className="min-h-screen bg-white">
      <main className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">

          <article>
            <header className="mb-12 border-b pb-8">
              <div className="flex gap-2 mb-2">
                {tags.map((tag) => (
                  <span key={tag.sys.id} className="bg-orange-500 text-white text-sm px-3 py-1 rounded-full shadow font-semibold">
                    {(tag as any).name}
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
                layout="fill" 
                className="object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-a:text-orange-600 prose-a:hover:text-orange-700">
              {content ? (
                // Contentfulのリッチテキストを表示
                <div className="contentful-rich-text">
                  {articleContent}
                </div>
              ) : (
                // contextをMarkdownとして表示
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    // カスタムコンポーネントでスタイリングを調整
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

        </div>
      </main>
    </div>
  );
} 