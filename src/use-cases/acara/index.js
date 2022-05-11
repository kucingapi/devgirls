const makeAddAcara = require('./add-acara');
const makeGetAcara = require('./get-acara');

const addAcara = makeAddAcara();
const getAcara = makeGetAcara();
const acaraService = Object.freeze({ addAcara, getAcara });

module.exports = acaraService;
module.exports = { addAcara, getAcara};
