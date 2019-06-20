const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
module.exports = merge(baseConfig, {
  mode: "development",
  output: {
    filename: "scripts/[name].[hash].js"
  },
  devtool: "cheap-source-map",
  devServer: {
    host: "localhost",
    port: 8080,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  }
});
