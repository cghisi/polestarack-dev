// your next.js configs
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.prismic.io",
      "prismic-io.s3.amazonaws.com",
      "polestarack.cdn.prismic.io",
      "images.unsplash.com",
    ],
  },
};
module.exports = nextConfig;
