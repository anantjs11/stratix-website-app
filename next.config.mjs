/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isProjectPages = Boolean(
  process.env.GITHUB_ACTIONS &&
    repoName &&
    repoName !== `${process.env.GITHUB_REPOSITORY_OWNER}.github.io`
);
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isProjectPages ? `/${repoName}` : "");

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
