/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [{ hostname: process.env.IMAGE_HOSTNAME || "127.0.0.1" }],
    unoptimized: true,
  },
  pageExtensions: ["ts", "tsx"],
};

export default nextConfig;
