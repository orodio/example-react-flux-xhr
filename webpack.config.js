var webpack = require("webpack");

var sharedDepsPlugin = new webpack.optimize.CommonsChunkPlugin('deps.js');

module.exports = {
  entry: {
    App: __dirname + "/dynamic/app.js"
  },

  output : {
    path : __dirname + "/static",
    filename : "[name].js"
  },

  resolve : {
    modulesDirectories : ["node_modules"]
  },

  module : {
    loaders : [
      {test: /\.js$/, exclude: "/node_modules/", loader: "jsx-loader?harmony&stripTypes!6to5-loader?experimental"}
    ]
  },

  plugins: [sharedDepsPlugin]
};
