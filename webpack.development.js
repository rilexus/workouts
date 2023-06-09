const { resolve } = require("path");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = () => {
  return {
    mode: "development",
    devtool: "inline-source-map",
    plugins: [new HotModuleReplacementPlugin({})],
    devServer: {
      static: {
        directory: resolve(__dirname, "dist"),
      },
      host: "localhost",
      historyApiFallback: true,
      compress: true,
      port: 3000,
      hot: true,
    },
  };
};
