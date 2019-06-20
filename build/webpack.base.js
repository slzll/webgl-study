const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const resolve = dir => path.resolve(__dirname, "..", dir);

module.exports = {
  entry: "./src/main.js",
  output: {
    path: resolve("dist"),
    filename: "scripts/[name].[chunkhash].js"
  },
  context: path.resolve(__dirname, "../"),
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.js[|x]?$/,
        exclude: /node_modules/,
        include: [
          resolve("src"),
          resolve("node_modules/webpack-dev-server/client")
        ],
        loader: "babel-loader"
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "img/[name].[hash:7].[ext]"
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "media/[name].[hash:7].[ext]"
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "fonts/[name].[hash:7].[ext]"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",
      inject: true,
      favicon: "./public/favicon.ico"
    })
  ]
};
