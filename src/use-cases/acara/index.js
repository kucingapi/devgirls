const makeAddAcara = require('./add-acara');
const makeGetAcara = require('./get-acara');
const makeGetAcaraById = require('./get-acara-by-id');

const addAcara = makeAddAcara();
const getAcara = makeGetAcara();
const getAcaraById = makeGetAcaraById();

const acaraService = Object.freeze({ addAcara, getAcara, getAcaraById });

module.exports = acaraService;
module.exports = { addAcara, getAcara, getAcaraById };
