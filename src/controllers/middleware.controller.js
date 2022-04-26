const { auth } = require("../use-cases/middleware");

module.exports = Object.freeze({
  auth: (httpRequest) => auth(httpRequest),
});
