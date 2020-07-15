const path = require("path");

const config = {
  context: __dirname,
  entry: ["./js/App.jsx"],
  devtool: "cheap-eval-source-map",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/public/",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false,
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        loader: "eslint-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        include: [
          path.resolve("js"),
          path.resolve("node_modules/preact-compat/src"),
        ],
      },
    ],
  },
};

module.exports = config;
