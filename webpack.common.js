const { resolve } = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpackCommonConfig = () => ({
  entry: {
    index: resolve(__dirname, "src", "index.js"),
    "service-worker": resolve(__dirname, "src", "service-worker.js"),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        // copy files from "public" to "dist" filder during build time
        {
          from: resolve(__dirname, "public", "images"),
          to: resolve(__dirname, "dist", "images"),
        },
        {
          from: resolve(__dirname, "public", "manifest.json"),
          to: resolve(__dirname, "dist", "manifest.json"),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      title: "Workouts",
      minify: true,
      filename: "index.html",
      template: resolve(__dirname, "public", "index.html"),
    }),
    // new WorkboxPlugin.GenerateSW({
    //   // these options encourage the ServiceWorkers to get in there fast
    //   // and not allow any straggling "old" SWs to hang around
    //   clientsClaim: true,
    //   skipWaiting: true,
    // }),
  ],
  resolve: {
    alias: {
      hooks: resolve(__dirname, "src/hooks"),
      ui: resolve(__dirname, "src/ui"),
      views: resolve(__dirname, "src/views"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: "defaults",
                  },
                ],
                "@babel/preset-react",
              ],
            },
          },
        ],
      },
    ],
  },
  output: {
    clean: true,
    path: resolve(__dirname, "dist"),
    filename: "[name].js",
  },
});

module.exports = webpackCommonConfig;
