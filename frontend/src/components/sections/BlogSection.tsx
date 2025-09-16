"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Entry } from "contentful";
import { fetchContentful } from "@/lib/api";
import { BlogEntry } from "@/types/cms";

export default function BlogSection() {
  const [blogList, setBlogList] = useState<Entry<BlogEntry>[]>([]);

  useEffect(() => {
    async function getBlogs() {
      const blogs = await fetchContentful('blog', { // 'blog' はContentfulのコンテンツタイプID
        limit: 3,
        order: '-sys.createdAt'
      });
      setBlogList(blogs.items as Entry<BlogEntry>[]);
    }
    getBlogs();
  }, []);

  return (
    <section className="py-20 bg-white" id="blog">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">ブログ</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogList.map((blog) => (
            <div key={blog.sys.id} className="bg-gray-50 rounded-xl shadow p-6 border-l-4 border-black/20 flex flex-col gap-2">
              <span className="text-xs text-gray-400">{new Date(blog.sys.createdAt).toLocaleDateString('ja-JP')}</span>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{blog.fields.title}</h3>
              <p className="text-gray-700 text-sm">{blog.fields.excerpt}</p>
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