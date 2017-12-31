// const webpack = require("webpack")
const path = require("path")

module.exports = {
  entry: "./client/App.js",
  output: {
    path: path.join(__dirname, "/public"),
    filename: "bundle.js"
  },
  context: __dirname,
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["react", "env", "stage-2"]
        }
      }
    ]
  }
}
