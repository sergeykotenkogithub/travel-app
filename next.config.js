/** @type {import('next').NextConfig} */

// const path = require('node:path');

const STUDIO_REWRITE = {
	source: '/studio/:path*',
	destination:
		process.env.NODE_ENV === 'development'
			? 'http://localhost:3333/studio/:path*'
			: '/travelapp/index.html',
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // webpack(config) {
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     '@styles': path.resolve(__dirname, '/assets/styles/'),
  //   };

  //   return config;
  // },
   env: {
    APP_URL: 'http://localhost:3000'
   },
   rewrites: () => [STUDIO_REWRITE],
}

module.exports = nextConfig
