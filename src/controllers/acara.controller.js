const {
  addAcara,
  getAcara,
  getAcaraById,
  removeAcara,
  registerAcara,
  getAcaraFromAnggota,
} = require('../use-cases/acara');
const { addKategoriAcara } = require('../use-cases/kategori');

const acaraController = Object.freeze({
  addAcara: (httpRequest) => addAcara(httpRequest),
  getAcara: (httpRequest) => getAcara(httpRequest),
  getAcaraById: (httpRequest) => getAcaraById(httpRequest),
  removeAcara: (httpRequest) => removeAcara(httpRequest),
  registerAcara: (httpRequest) => registerAcara(httpRequest),
  getAcaraFromAnggota: (httpRequest) => getAcaraFromAnggota(httpRequest),
  addKategoriAcara: (httpRequest) => addKategoriAcara(httpRequest),
});

module.exports = acaraController;
