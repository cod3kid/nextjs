module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.node = {
        fs: "empty",
      };
    }
    return config;
  },
};
