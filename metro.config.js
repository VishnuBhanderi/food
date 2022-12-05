const path = require("path");
module.exports = {
  resolver: {
    extraNodeModules: {
      axios: path.resolve(__dirname, "./node_modules/axios/index.js"),
    },
  },
  
};
 