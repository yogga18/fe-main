/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ['images.unsplash.com', 'img.icons8.com'],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
