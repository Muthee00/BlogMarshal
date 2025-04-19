import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "cdn.motor1.com",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
