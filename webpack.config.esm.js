const path = require("path");
const common = require("./webpack.common");

module.exports = {
  ...common,
  name: "esm",
  experiments: {
    outputModule: true
  },
  output: {
    path: path.resolve(__dirname, "dist/esm"),
    filename: "[name].js",
    library: {
      type: "module"
    },
    module: true,
    chunkFormat: "module",
    clean: false
  }
};
