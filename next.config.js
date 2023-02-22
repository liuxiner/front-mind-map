/**
 * @type {import('next').NextConfig}
 */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'cn'],
    defaultLocale: 'en',
  },
  webpack: (config) => {
    // console.log(__dirname);
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
    };
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
