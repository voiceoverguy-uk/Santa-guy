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
      {
        source: '/contact-santa/:path*',
        destination: '/contact-santa-guy',
        permanent: true,
      },
      {
        source: '/contact-santa',
        destination: '/contact-santa-guy',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
