/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["infura-ipfs.io", "seb-nftmarketplace.infura-ipfs.io"],
  },
};

module.exports = nextConfig;