module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'public/js/bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
};
