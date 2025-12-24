import type { NextConfig } from "next";

// GitHub Pages用の設定（環境変数で制御）
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  // GitHub Pages用のベースパス設定（リポジトリ名を指定）
  basePath: isGitHubPages ? '/Website' : '',
  // 画像やアセットのプレフィックスも同様に設定
  assetPrefix: isGitHubPages ? '/Website' : '',
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
