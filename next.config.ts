import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.mitbtcexpo.org",
        pathname: "/assets/img/team/**",
      },
    ],
  },
};

export default nextConfig;
