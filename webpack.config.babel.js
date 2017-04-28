/**
 * Created by thram on 18/01/17.
 */
import HtmlwebpackPlugin from 'html-webpack-plugin';

const INDEX_HTML_SETUP = {
  template: 'node_modules/html-webpack-template/index.ejs',
  title: 'JS Workshop 2017',
  appMountId: 'workshop',
  meta: [
    {
      name: 'viewport',
      content: 'user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1',
    },
  ],
  inject: false,
};

export default {
  cache: true,
  entry: `${__dirname}/src/index`,
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader?cacheDirectory=true', include: `${__dirname}/src/` },
    ],
  },
  plugins: [
    new HtmlwebpackPlugin(INDEX_HTML_SETUP),
  ],
  performance: {
    hints: false,
  },
};
