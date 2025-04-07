// const path = require('path')
 
// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'res.cloudinary.com',
//         pathname: '**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'media.dev.to',
//         pathname: '**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'media2.dev.to',
//         pathname: '**',
//       },
//     ],
//   },
// }

const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  output: 'standalone', // For optimized Vercel deployments
  compress: true, // Enable compression
  productionBrowserSourceMaps: false, // Disable for better performance
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        pathname: '**',
      },
    ],
    minimumCacheTTL: 60, // Cache images for 60 seconds
  },

  // Sass support
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  // Build optimizations
  eslint: {
    ignoreDuringBuilds: true, // Only disable if you have CI checks
  },
  typescript: {
    ignoreBuildErrors: true, // Only disable if you have CI checks
  },

  // Experimental features (use with caution)
  experimental: {
    optimizePackageImports: [
      'react-icons', 
      // Add other frequently used libraries here
    ],
    // Recommended for App Router:
    // serverActions: true,
    typedRoutes: true, // If using TypeScript
  },

  // Webpack optimizations
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  }
};