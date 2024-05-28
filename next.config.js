const {withContentlayer} = require("next-contentlayer")

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
}

module.exports = withContentlayer(nextConfig)