
// next.config.js
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
    unoptimized: true
  },
  output: 'export'
};

module.exports = nextConfig;
/*
/!** @type {import('next').NextConfig} *!/
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig*/
