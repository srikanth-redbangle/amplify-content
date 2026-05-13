const { NextFederationPlugin } = require('@module-federation/nextjs-mf')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: (config, options) => {
    const { isServer } = options

    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
      layers: true,
    }

    // 🔑 FIX: DO NOT use 'auto' in browser builds
    if (!isServer) {
      config.output.publicPath = '/_next/'
    }

    // config.plugins.push(
    //   new NextFederationPlugin({
    //     name: 'rbGroup',
    //     remotes: {
    //       rbIndia: `rbIndia@${process.env.NEXT_PUBLIC_HOST_URL}/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
    //       rbGlobal: `rbGlobal@${process.env.NEXT_PUBLIC_HOST_URL}/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
    //     },
    //     filename: 'static/chunks/remoteEntry.js',
    //     extraOptions: {
    //       exposePages: true,
    //     },
    //     shared: {
    //       tailwindcss: { singleton: true, eager: true },
    //       postcss: { singleton: true, eager: true },
    //       autoprefixer: { singleton: true, eager: true },
    //     },
    //   })
    // )

    return config
  },

  experimental: {
    middlewarePrefetch: 'strict',
  },
}

module.exports = nextConfig
