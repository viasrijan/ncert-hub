/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/open-ncert',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
