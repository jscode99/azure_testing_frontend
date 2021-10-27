/** @type {import('next').NextConfig} */
module.exports = {
     env: {
    BASE_URL: "https://9adf-20-74-161-164.ngrok.io",
    PATH: {
      test: "/tests",
    },
  },
    reactStrictMode: true,
    images: {
        loader: "imgix",
        path: "",
        domains: ["9adf-20-74-161-164"],

    },
};
