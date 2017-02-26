module.exports = {
  entry: ['./app/index.js'],
  output: {
    path: './build', //always leave out the '.' in './build'. when running webpack-dev-server
    filename: 'bundle.js'
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
  devServer: {
    port: 3000,
    contentBase: './build',
    inline: true
  }
}