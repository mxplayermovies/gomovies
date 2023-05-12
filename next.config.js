/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });
  
  module.exports = withBundleAnalyzer({
    // Your Next.js configuration options here
  });

  module.exports = {
    images: {
      domains: ['res.cloudinary.com'],
    },
  }
  
  
  
  const TerserPlugin = require('terser-webpack-plugin');
  
  module.exports = {
    webpack: (config, options) => {
      config.optimization.minimize = true;
      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
            },
          },
        }),
      ];
      return config;
    },
  };
