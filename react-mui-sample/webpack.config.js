module.exports = {
  entry: {
    app: './app.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude:  /(node_modules)/
      }
    ]
  }
}