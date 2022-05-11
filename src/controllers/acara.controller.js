const { addAcara, getAcara, getAcaraById } = require('../use-cases/acara');

const acaraController = Object.freeze({
  addAcara: (httpRequest) => addAcara(httpRequest),
  getAcara: (httpRequest) => getAcara(httpRequest),
  getAcaraById: (httpRequest) => getAcaraById(httpRequest),
});

module.exports = acaraController;
