const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");
const InterpolateHtmlPlugin = require("interpolate-html-plugin");
const { DefinePlugin } = require("webpack");
const dotenv = require("dotenv");

dotenv.config();

module.exports = (_, argv) => ({
  output: {
    publicPath: "http://localhost:3002/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  devServer: {
    port: 3002,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images", // This is the directory where your images will be output
            },
          },
        ],
      },
      // Rule for processing HTML files
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "Home",
      filename: "remoteEntry.js",
      exposes: {
        "./HomeApp": "./src/bootstrap",
      },
      remotes: {},

      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies["react"],
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      manifest: "./public/manifest.json",
    }),
    new InterpolateHtmlPlugin({
      PUBLIC_URL: process.env.PUBLIC_URL || "",
      // You can define other variables here as needed
    }),
    new DefinePlugin({
      "process.env": JSON.stringify(process.env),
      // You can define other environment variables here as needed
    }),
  ],
  target: "web",
});
