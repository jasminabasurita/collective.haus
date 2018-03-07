const isDev = process.env.NODE_ENV === "development"
const path = require("path")

//Plugins
const LiveReloadPlugin = require("webpack-livereload-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const extractSass = new ExtractTextPlugin({
  filename: "main.bundle.css"
})

module.exports = {
  entry: ["./client/App.js", "./scss/Main.scss"],
  output: {
    path: path.join(__dirname, "/public"),
    filename: "bundle.js"
  },
  context: __dirname,
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: isDev
    ? [
        new LiveReloadPlugin({ appendScriptTag: true, ignore: /\.scss$/ }),
        extractSass
      ]
    : [extractSass],
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["react", "env", "stage-2"]
        }
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                minimize: !isDev
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }
    ]
  }
}
