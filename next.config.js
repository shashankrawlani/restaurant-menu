/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "cloudinary",
    path: "/",
  },
  basePath: "/nextjs-pages",
  assetPrefix: "/nextjs-pages",
  swcMinify: true,
};

module.exports = nextConfig;
