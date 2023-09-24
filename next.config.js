/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // SSG
  // assetPrefix: 'https://math-game-deploy-example--chatonode.repl.co',
  // trailingSlash: true,

  images: { unoptimized: true },
  assetPrefix: '/out',   // Activate for SCR build
}

module.exports = nextConfig
