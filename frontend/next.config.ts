import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/Website",
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
