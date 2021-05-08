module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
    },
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          use: "raw-loader",
        },
      ],
    },
  },
};
