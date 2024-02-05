/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ['images.unsplash.com', 'img.icons8.com'],
  // },
  // disable / hide sourcemaps
  productionBrowserSourceMaps: false,
  // disable / hide console.log in production
  compiler: {
    removeConsole: true,
  },
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
