module.exports = {
  webpack: (config, { isServer }) => {
    config.experiments = {
      asyncWebAssembly: true,
    };
    return config;
  },
  trailingSlash: true,
}
