/** @type {import('next').NextConfig} */
const nextConfig = {
  /** SSG */
  output: 'export',

  /** Replit: Keep it Inactive */
  // assetPrefix: 'https://math-game-deploy-example--chatonode.repl.co',

  /** Not needed */
  // trailingSlash: true,

  /** Images */
  images: { unoptimized: true },

  /** Build Steps: Activate for SCR build / Deactivate during pushes */
  // // Step #1
  // assetPrefix: '/games/warehouse',
  // // Step #2 ->  Change the output directory `out` -> `games/warehouse`
  // distDir: '/games/warehouse',
}

// module.exports = nextConfig
