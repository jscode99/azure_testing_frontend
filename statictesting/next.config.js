/** @type {import('next').NextConfig} */
module.exports = {
     env: {
    BASE_URL: "http://20.74.161.164:1337",
    PATH: {
      test: "/tests",
    },
  },
    reactStrictMode: true,
    images: {
        loader: "imgix",
        path: "",
        domains: ["20.74.161.164"],
    },
};
