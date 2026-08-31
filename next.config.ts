import type { NextConfig } from "next";
// @ts-ignore
import withPWAInit from "next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: process.env.NODE_ENV === "production",
  skipWaiting: true,
  buildExcludes: [/webpack-hmr/],
  publicExcludes: ["!noprocess/**/*"],
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: [
    "100.121.36.35",
    "100.121.36.35:3000",
    "localhost",
    "localhost:3000",
    "127.0.0.1",
    "127.0.0.1:3000",
  ],
};

export default withPWA(nextConfig);
