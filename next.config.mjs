/** @type {import('next').NextConfig} */
const repoName = 'stratix-website-app'; // Hardcoded for GitHub Pages
const basePath = `/${repoName}`;

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  }
};

export default nextConfig;
