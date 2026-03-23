/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    viewTransition: true
  },
  devIndicators: false,
  reactStrictMode: false,
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/**'
      }
    ]
  }
};

export default nextConfig;
