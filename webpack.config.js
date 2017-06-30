const webpack = require('webpack');
const { resolve, join } = require('path');
const fs = require('fs');

module.exports = {
  entry: [
    './index.js'
    ],
  output: {
    path: resolve(__dirname, "dist"),
    filename: 'bundle.js',
    publicPath: '/'
  },

  target: 'web',

  resolve: {
    modules: [
      resolve(__dirname, 'app'),
      resolve(__dirname, 'node_modules')
    ],
    extensions: ['.js', '.jsx', '.css', '.svg'],
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test : /\.js?/,
        exclude: [/node_modules/],
        use : [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ["es2015", {"modules": false}],
                'react',
              ],
              plugins: [
                'transform-class-properties',
                'syntax-object-rest-spread',
                'transform-object-rest-spread',
              ]
            }
          },
        ],
      },
    ],
    // https://github.com/webpack/webpack/issues/304
    noParse: [
      /node_modules\/react\/dist\/react.min.js/,
      /node_modules\/react-dom\/dist\/react-dom.min.js/
    ],
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    'fs': {},
    'react': 'React',
    'react-dom': 'ReactDOM'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ]

}
