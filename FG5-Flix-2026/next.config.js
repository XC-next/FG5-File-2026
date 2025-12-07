/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org", "placehold.co", "localhost"]
  }
};

module.exports = nextConfig;
