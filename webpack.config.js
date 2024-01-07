const webpackDevelopmentConfig = require("./webpack.development");
const webpackProductionConfig = require("./webpack.production");
const webpackCommonConfig = require("./webpack.common");
const { merge } = require("webpack-merge");
// const WorkboxPlugin = require("workbox-webpack-plugin");
// const CopyPlugin = require("copy-webpack-plugin");

const commonWebpackConfig = () => {
  return webpackCommonConfig();
};

module.exports = (env) => {
  const { development: isDevelopmentEnv } = env;
  const commonConfig = commonWebpackConfig(env);
  const envConfig = isDevelopmentEnv
    ? webpackDevelopmentConfig(env)
    : webpackProductionConfig(env);

  const mergedConfigs = merge(commonConfig, envConfig);

  return mergedConfigs;
};
