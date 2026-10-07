/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      {
        source: "/santa-tracker/:path*",
        destination: "https://www.santaradio.co.uk/santa-tracker",
        permanent: true,
      },
    ];
  },
  images: {
    unoptimized: false,
  },
};

module.exports = nextConfig;
