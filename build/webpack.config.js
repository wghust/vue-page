var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var TerserPlugin = require('terser-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
var vpsPath = path.resolve(__dirname, '../');

var paths = {
  src: vpsPath + '/src/',
  dist: vpsPath + '/dist/'
};

var publicPath = '/dist/';

module.exports = {
  mode: 'production',
  entry: {
    'business/index/index': paths.src + '/business/index/app.js'
  },
  output: {
    path: paths.dist,
    publicPath: publicPath,
    chunkFilename: 'chunks/[name].chunk.js',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.styl'],
    modules: [
      path.join(__dirname, '../src'),
      'node_modules'
    ],
    alias: {
      'components': paths.src + 'components'
    }
  },
  stats: {
    entrypoints: false
  },
  performance: {
    hints: false
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 6,
          compress: true,
          sourceMap: true,
          output: {
            comments: false,
            beautify: false
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: [
        'vue-loader'
      ]
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader',
      options: {
        limit: 1500,
        name: 'images/[name].[ext]?[hash]'
      }
    }, {
      test: /\.(woff|ttf)$/,
      loader: 'url-loader',
      options: {
        limit: 1500,
        name: 'fonts/[name].[ext]?[hash]'
      }
    }, {
      test: /\.css?$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader'
      ]
    }, {
      test: /\.styl(us)?$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'stylus-loader'
      ]
    }]
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new VueLoaderPlugin()
  ]
}