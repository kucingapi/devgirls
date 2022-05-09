const { getAnggota } = require("../use-cases/pengurus");


const pengurusController = Object.freeze({
  getAnggota: (httpRequest) => getAnggota(httpRequest),

});

module.exports = pengurusController;
