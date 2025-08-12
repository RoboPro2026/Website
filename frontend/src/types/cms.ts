// StrapiのAPIレスポンスの基本構造
interface StrapiMeta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

interface StrapiDataItem<T> {
  id: number;
  attributes: T;
}

// Strapiのメディアフォーマット
interface StrapiMediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  url: string;
}

// Strapiのメディアオブジェクト
interface StrapiMedia {
  data: StrapiDataItem<{
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      thumbnail: StrapiMediaFormat;
      small: StrapiMediaFormat;
      medium: StrapiMediaFormat;
      large: StrapiMediaFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any;
    createdAt: string;
    updatedAt: string;
  }> | null;
}


// News記事の型定義
export interface News {
  title: string;
  content: string; // rich textはstringとして扱う
  date: string;
  image: StrapiMedia;
  category: string;
  excerpt: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// Blog記事の型定義
export interface Blog {
  title: string;
  content: string; // rich textはstringとして扱う
  date: string;
  excerpt: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// APIレスポンスの型 (複数記事)
export interface StrapiCollectionResponse<T> {
  data: StrapiDataItem<T>[];
  meta: StrapiMeta;
}

// APIレスポンスの型 (単一記事)
export interface StrapiSingleResponse<T> {
  data: StrapiDataItem<T>;
  meta: {};
}
