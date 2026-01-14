import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
// 大学のサーバー用かどうかの判定（手動で切り替えるか、環境変数を使う）
const isNagaokaUT = true; // 大学サーバーに送る時はここを true に

const basePath = isNagaokaUT ? '/~robocon' : (isGitHubPages ? '/Website' : '');

const nextConfig: NextConfig = {
  output: "export",
  // 大学サーバーなら '/~robocon'、GitHubなら '/Website'、それ以外は空
  
  basePath: basePath,
  
  trailingSlash: true,
  
  // assetPrefix も basePath と合わせるのが一般的です
  assetPrefix: basePath,
  

  // 環境変数としてbasePathをクライアントサイドで利用可能にする
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
    ],
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;