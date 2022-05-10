const makeAddAcara = require('./add-acara');

const addAcara = makeAddAcara();
const acaraService = Object.freeze({ addAcara });

module.exports = acaraService;
module.exports = { addAcara };
