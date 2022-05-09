const { getAnggota, addPengurus } = require('../use-cases/pengurus');

const pengurusController = Object.freeze({
  getAnggota: (httpRequest) => getAnggota(httpRequest),
  addPengurus: (httpRequest) => addPengurus(httpRequest),
});

module.exports = pengurusController;
