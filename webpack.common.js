const common = {
  mode: "production",
  entry: {
    index: "./src/index.ts",
    "DXForm/index": "./src/DXForm/index.ts",
    "DXSelect/index": "./src/DXSelect/index.ts"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: "tsconfig.webpack.json"
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  externals: {
    react: "react",
    "react-dom": "react-dom"
  },
  optimization: {
    usedExports: true,
    concatenateModules: true
  }
};

module.exports = common;
