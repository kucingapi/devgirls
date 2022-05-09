const makeGetAnggota = require('./get-anggota');

const getAnggota = makeGetAnggota();

const pengurusService = Object.freeze({ getAnggota });

module.exports = pengurusService;
module.exports = { getAnggota };
