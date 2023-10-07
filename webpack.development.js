const { resolve } = require("path");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = (args) => {
  console.log(args);
  const { port } = args;
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
      port,
      hot: true,
    },
  };
};
