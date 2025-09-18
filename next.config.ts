import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Remove .svg from Next.js default file loader
    config.module.rules.forEach((rule: any) => {
      if (rule.test?.test?.(".svg")) {
        rule.exclude = /\.svg$/i;
      }
    });

    // Add SVGR loader
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
