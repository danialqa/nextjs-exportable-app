const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
});

module.exports = nextConfig;
