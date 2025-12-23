import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  // GitHub Pages用のベースパス設定（リポジトリ名を指定）
  basePath: process.env.NODE_ENV === 'production' ? '/Website' : '',
  // 画像やアセットのプレフィックスも同様に設定
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Website' : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
    ],
  },
  eslint: {
    // ビルド時のESLintエラーを無視する
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ビルド時のTypeScriptエラーを無視する
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
