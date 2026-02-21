import type { NextConfig } from "next";

// For GitHub Pages project repos the site is served under a sub-path:
//   https://<username>.github.io/<repo-name>/
// Set NEXT_PUBLIC_BASE_PATH to '/<repo-name>' in the CI workflow (or leave
// empty for a user/org site served at the root).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,          // produces slug/index.html — reliable on GH Pages
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
