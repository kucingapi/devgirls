const { auth, pengurus } = require("../use-cases/middleware");

module.exports = Object.freeze({
  auth: (httpRequest) => auth(httpRequest),
  pengurus: (httpRequest) => pengurus(httpRequest),
});
