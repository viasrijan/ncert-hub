/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ncert-hub',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
