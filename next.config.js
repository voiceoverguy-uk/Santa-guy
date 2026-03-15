/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
  },
  async redirects() {
    return [
      {
        source: '/santa-message',
        destination: '/santa-guy-message',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
