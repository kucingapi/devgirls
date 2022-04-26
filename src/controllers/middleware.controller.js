const { auth, pengurus } = require('../use-cases/middleware');

const middlewareController = Object.freeze({
  auth: (httpRequest) => auth(httpRequest),
  pengurus: (httpRequest) => pengurus(httpRequest),
});

module.exports = middlewareController;
