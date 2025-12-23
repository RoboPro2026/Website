import { createClient } from 'contentful';

const CONTENTFUL_SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const CONTENTFUL_ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

// 環境変数がない場合は警告を出すが、ビルドは継続する
if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
  console.warn('Warning: Contentful credentials not found. News features will be unavailable.');
}

// 環境変数がある場合のみクライアントを作成
export const contentfulClient = (CONTENTFUL_SPACE_ID && CONTENTFUL_ACCESS_TOKEN) 
  ? createClient({
      space: CONTENTFUL_SPACE_ID,
      accessToken: CONTENTFUL_ACCESS_TOKEN,
    })
  : null;
