const { addAcara, getAcara } = require('../use-cases/acara');

const acaraController = Object.freeze({
  addAcara: (httpRequest) => addAcara(httpRequest),
  getAcara: (httpRequest) => getAcara(httpRequest),
});

module.exports = acaraController;
