var webpack = require('webpack');
var WebPackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebPackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    headers: { "Access-Control-Allow-Origin": "http://localhost:8080", "Access-Control-Allow-Credentials": "true" }
}).listen(8080, 'localhost', function(err, result){
    if(err){
        return console.log(err);
    }

    console.log('Listening on localhost:8080');
});