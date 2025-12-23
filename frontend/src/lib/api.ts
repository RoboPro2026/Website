import qs from 'qs';
import { contentfulClient } from './contentful';

/**
 * APIのベースURLを取得します。
 * 環境変数 NEXT_PUBLIC_STRAPI_API_URL が設定されていない場合は、
 * デフォルトで http://localhost:1337 を使用します。
 */
const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

/**
 * Strapi APIからデータを取得するための共通関数
 * @param path APIエンドポイントのパス (例: /api/news)
 * @param urlParamsObject クエリパラメータのオブジェクト (qsでシリアライズされます)
 * @param options fetch APIのオプション
 * @returns 取得したデータ
 */
export async function fetchAPI(path: string, urlParamsObject = {}, options = {}) {
  try {
    // オプションをマージ
    const mergedOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    };

    // クエリ文字列を生成
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${STRAPI_API_URL}${path}${queryString ? `?${queryString}` : ''}`;

    // APIリクエストを実行
    const response = await fetch(requestUrl, mergedOptions);
    
    if (!response.ok) {
      console.error('API Error:', response.status, response.statusText);
      throw new Error(`An error occurred please try again`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`An error occurred please try again`);
  }
}

/**
 * Contentfulからデータを取得するための共通関数
 * @param contentType コンテンツタイプID
 * @param query クエリパラメータ
 * @returns 取得したデータ
 */
export async function fetchContentful(contentType: string, query?: object) {
  try {
    // クライアントが初期化されていない場合は空の結果を返す
    if (!contentfulClient) {
      console.warn('Contentful client is not initialized. Returning empty results.');
      return { items: [], total: 0 };
    }
    
    const entries = await contentfulClient.getEntries({
      content_type: contentType,
      ...query,
    });
    return entries;
  } catch (error) {
    console.error(error);
    throw new Error(`An error occurred while fetching from Contentful`);
  }
}

/**
 * Contentfulから全てのタグを取得する
 * @returns 取得したタグのリスト
 */
export async function fetchAllTags() {
  try {
    // クライアントが初期化されていない場合は空の配列を返す
    if (!contentfulClient) {
      console.warn('Contentful client is not initialized. Returning empty tags.');
      return { items: [], total: 0 };
    }
    
    const tags = await contentfulClient.getTags();
    return tags.items;
  } catch (error) {
    console.error(error);
    throw new Error(`An error occurred while fetching tags from Contentful`);
  }
}
