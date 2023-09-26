/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // SSG
  // assetPrefix: 'https://math-game-deploy-example--chatonode.repl.co',
  // trailingSlash: true,

  images: { unoptimized: true },
  // assetPrefix: '/out',   // OLD -> Activate for SCR build / Deactivate during pushes
  // assetPrefix: '/games/warehouse', // NEW -> Activate for SCR build / Deactivate during pushes
  // // Optional: Change the output directory `out` -> `dist`
  // distDir: '/games/warehouse',
}

module.exports = nextConfig
