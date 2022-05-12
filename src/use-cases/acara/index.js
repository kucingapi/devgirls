const makeAddAcara = require('./add-acara');
const makeGetAcara = require('./get-acara');
const makeGetAcaraById = require('./get-acara-by-id');
const makeRegisterAcara = require('./register-acara');
const makeRemoveAcara = require('./remove-acara');

const addAcara = makeAddAcara();
const getAcara = makeGetAcara();
const getAcaraById = makeGetAcaraById();
const removeAcara = makeRemoveAcara();
const registerAcara = makeRegisterAcara();

const acaraService = Object.freeze({
  addAcara,
  getAcara,
  getAcaraById,
  removeAcara,
	registerAcara
});

module.exports = acaraService;
module.exports = { addAcara, getAcara, getAcaraById, removeAcara, registerAcara };
