import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  ...(isProduction
    ? {
        basePath: "/bimo-landing",
        assetPrefix: "/bimo-landing/"
      }
    : {})
};

export default nextConfig;
