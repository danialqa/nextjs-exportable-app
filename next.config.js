const withPWA = require('next-pwa');
const optimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');

/** @type {import('next').NextConfig} */

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/requests': { page: '/requests' },
      '/profile': { page: '/profile' },
    };
  },
});

module.exports = withPlugins([[optimizedImages, {}]]);

module.exports = nextConfig;
