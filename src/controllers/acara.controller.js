const {
  addAcara,
  getAcara,
  getAcaraById,
  removeAcara,
} = require('../use-cases/acara');

const acaraController = Object.freeze({
  addAcara: (httpRequest) => addAcara(httpRequest),
  getAcara: (httpRequest) => getAcara(httpRequest),
  getAcaraById: (httpRequest) => getAcaraById(httpRequest),
  removeAcara: (httpRequest) => removeAcara(httpRequest),
});

module.exports = acaraController;
