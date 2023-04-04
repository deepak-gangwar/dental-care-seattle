/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // specifies the list of domains from which the Next.js application is allowed to load images.
  // By default, Next.js only allows images to be loaded from the same origin
  images: {
    domains: ['cdn.sanity.io'],
  },
}

module.exports = nextConfig
