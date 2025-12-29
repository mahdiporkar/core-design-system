const path = require("path");
const common = require("./webpack.common");

module.exports = {
  ...common,
  name: "cjs",
  output: {
    path: path.resolve(__dirname, "dist/cjs"),
    filename: "[name].cjs",
    library: {
      type: "commonjs2"
    },
    clean: false
  }
};
