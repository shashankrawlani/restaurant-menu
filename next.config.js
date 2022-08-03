/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "cloudinary",
    path: "/",
  },

  swcMinify: false,
};

module.exports = nextConfig;
