import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  assetPrefix: isProd ? '/Website/' : '',
  basePath: isProd ? '/Website' : '',
  publicRuntimeConfig: {
    basePath: isProd ? '/Website' : '',
  },
  env: {
    BASE_PATH: isProd ? '/Website' : '',
  },
  images: {
    unoptimized: true,
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
