/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "d1b3667xvzs6rz.cloudfront.net",
      "images.wsj.net",
      "cdn.vox-cdn.com",
      "linkdevelopment.com",
      "img-s-msn-com.akamaized.net",
      "image.khaleejtimes.com",
      "149366112.v2.pressablecdn.com",
      "www.themarysue.com",
      "s.yimg.com",
      "assets-prd.ignimgs.com",
      "cdnph.upi.com",
      "www.torquenews.com",
      "cdn.wamda.com",
      "www.xda-developers.com",
      "bloximages.newyork1.vip.townnews.com",
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
};

module.exports = nextConfig;
