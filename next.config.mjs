/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: false },
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: "/Portfolio",
  assetPrefix: "/Portfolio",
};
export default nextConfig;
