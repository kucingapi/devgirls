const {
  addAcara,
  getAcara,
  getAcaraById,
  removeAcara,
  registerAcara,
} = require('../use-cases/acara');

const acaraController = Object.freeze({
  addAcara: (httpRequest) => addAcara(httpRequest),
  getAcara: (httpRequest) => getAcara(httpRequest),
  getAcaraById: (httpRequest) => getAcaraById(httpRequest),
  removeAcara: (httpRequest) => removeAcara(httpRequest),
  registerAcara: (httpRequest) => registerAcara(httpRequest),
});

module.exports = acaraController;
