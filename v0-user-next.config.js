/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/kongjaban-landing" : "",
  basePath: process.env.NODE_ENV === "production" ? "/kongjaban-landing" : "",
}

module.exports = nextConfig

