const webpackDevelopmentConfig = require('./webpack.development');
const webpackProductionConfig = require('./webpack.production');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const { resolve } = require('path')

const commonWebpackConfig = (env) => {
  return {
    entry: resolve(__dirname, 'src', 'index.js'),
    plugins: [
      new HtmlWebpackPlugin({
        title:'Workouts',
        minify: true,
        filename: 'index.html',
        template: resolve(__dirname, 'public', 'index.html'),
      })
    ],
    resolve: {
      alias: {
        ui: resolve(__dirname, 'src/ui'),
        views: resolve(__dirname, 'src/views'),
      },
    },
    module: {
      rules: [
        {
          test: /\.(jsx|js)$/,
          include: resolve(__dirname, 'src'),
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      "targets": "defaults"
                    }
                  ],
                '@babel/preset-react'
              ]
              }
            }
          ]
        }
      ]
    },
    output: {
      clean: true,
      path: resolve(__dirname, 'dist'),
      filename: 'index.js'
    }
  }
}

module.exports = (env) => {
  const { development: isDevelopmentEnv } = env;
  const commonConfig = commonWebpackConfig(env);
  const envConfig = isDevelopmentEnv
    ? webpackDevelopmentConfig(env)
    : webpackProductionConfig(env);

  const mergedConfigs = merge(commonConfig, envConfig);

  return mergedConfigs
}