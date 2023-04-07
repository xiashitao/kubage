/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/overview',
        permanent: true
      }
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.APISERVER}/api/:path*`
      },
      {
        source: '/apis/:path*',
        destination: `${process.env.APISERVER}/apis/:path*`
      }
    ];
  }
};

module.exports = nextConfig;
