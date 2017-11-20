var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  colors:true,
  contentBase: __dirname
}).listen(1234, '192.168.31.106', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at 1234');
});
