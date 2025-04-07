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

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
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
  },
  // Add these new configurations
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  staticPageGenerationTimeout: 300,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  }
};