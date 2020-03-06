var path = require('path');
var fs = require('fs');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader')
var vpsPath = path.resolve(__dirname, '../');

var pg = fs.readFileSync(vpsPath + '/package.json');
var pjInfo = JSON.parse(pg);

var paths = {
  src: vpsPath + '/src/',
  dist: vpsPath + '/dist/'
};

var publicPath = '/dist/';

// 打包到线上，用这个地址
// var publicPath = '/journey/dist/';

module.exports = {
  mode: 'development',
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
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.styl(us)?$/,
      use: [
        'style-loader',
        'css-loader',
        'stylus-loader'
      ]
    }]
  },
  devtool: '#eval-source-map',
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../'),
    hot: true,
    port: 8833
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: 'chunks/[name].chunk.css'
    }),
    new VueLoaderPlugin()
  ]
}