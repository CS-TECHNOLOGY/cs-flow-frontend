const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = (env) => {
  mode: env.NODE_ENV;
  const configs = {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "bundle.js",
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      modules: [path.resolve(__dirname, "./src"), "./node_modules"]
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          // exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.css$/,
          use: [{ loader: "style-loader" }, { loader: "css-loader" }],
        },
        {
          test: /\.(sa|sc)ss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
    devServer: {
      port: 2202,
    },
  };
  return configs;
};
