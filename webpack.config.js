const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const detailURL = "detail@https://teamdetail.netlify.app/remoteEntry.js";
const adsURL = "ads@https://teamads.netlify.app/remoteEntry.js";
const hostURL = "host@https://teamhost.netlify.app/remoteEntry.js";

// const hostURL = "host@http://localhost:3000/remoteEntry.js";
// const adsURL = "ads@http://localhost:8002/remoteEntry.js";
// const detailURL = "detail@http://localhost:8001/remoteEntry.js";

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: "auto",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },

  module: {
    rules: [
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
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        host: hostURL,
        detail: detailURL,
        ads: adsURL,
      },
      exposes: {
        "./Navbar": "./src/components/Navbar.js",
        "./Layout": "./src/Layout.js",
        "./Store": "./src/store.js",
      },
      shared: {
        ...deps,
        react: {
          import: "react",
          requiredVersion: deps.react,
          strictVersion: true,
        },
        "react-dom": {
          import: "react-dom",
          strictVersion: true,
          requiredVersion: deps["react-dom"],
        },
        "react-router-dom": {
          import: "react-router-dom",
          strictVersion: true,
          requiredVersion: deps["react-router-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
