module.exports = {
  entry : __dirname + "/dynamic/app.js",
  output : {
    path : __dirname + "/static",
    filename : "scripts.js"
  },

  resolve : {
    modulesDirectories : ["node_modules"]
  },

  module : {
    loaders : [
      {test: /\.js$/, loader: "jsx-loader?harmony&stripTypes"}
    ]
  }
};
