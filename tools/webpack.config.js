const path = require('path');
const webpack = require('webpack');

const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function() {
  const CONFIG = {
    entry: { // order is important
      polyfills: path.join(process.cwd(), 'src/polyfills.ts'),
      app: path.join(process.cwd(), 'src/index.ts'),
    },
    output: {
      path: path.join(process.cwd(), 'dist'),
      filename: '[name].js',
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        inject: 'body',
        template: path.join(process.cwd(), 'src/index.ejs'),
        title: 'Bucaniada',
      }),
    ],
    resolve: {
      alias: {
        '@common': path.join(process.cwd(), 'src/app/common'),
        '@core': path.join(process.cwd(), 'src/app/core'),
        '@models': path.join(process.cwd(), 'src/app/models'),
        '@modules': path.join(process.cwd(), 'src/app/modules'),
        '@ui': path.join(process.cwd(), 'src/app/ui'),
      },
      extensions: ['.ts', '.js', '.scss', '.html']
    },
    module: {
      rules: [
        {
          test: /\.ts/,
          use: [
            {
              loader: 'ts-loader'
            }
          ]
        }
      ]
    }
  };
  return merge(CONFIG, require('./webpack/dev'));
}
