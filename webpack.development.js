const { resolve } = require("path");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = () => {
  return {
    mode: "development",
    devtool: "inline-source-map",
    plugins: [new HotModuleReplacementPlugin({})],
    devServer: {
      bonjour: true,
      static: {
        directory: resolve(__dirname, "dist"),
      },
      historyApiFallback: {
        index: "index.html",
      },
      compress: true,
      port: 3000,
      hot: true,
    },
  };
};
