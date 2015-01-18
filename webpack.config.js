var webpack           = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var sharedDepsPlugin = new webpack.optimize.CommonsChunkPlugin('deps.js');
var extractStylesPlugin = new ExtractTextPlugin("styles.css");

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
      {test: /\.js$/, exclude: "/node_modules/", loader: "jsx-loader?harmony&stripTypes!6to5-loader?experimental"},
      {test: /\.css$/, exclude: "/node_modules/", loader: ExtractTextPlugin.extract("css-loader!autoprefixer-loader!sass-loader")}
    ]
  },

  plugins: [sharedDepsPlugin, extractStylesPlugin]
};
