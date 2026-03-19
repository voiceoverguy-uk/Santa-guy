/** @type {import('next').NextConfig} */
const nextConfig = {
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: false,
  },
};

module.exports = nextConfig;
