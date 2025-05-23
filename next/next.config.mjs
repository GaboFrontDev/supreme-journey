/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: 'custom',
    loaderFile: './customImageLoader.js',
  },
  output: 'export',
};

export default nextConfig;
