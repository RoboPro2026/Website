import qs from 'qs';

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
