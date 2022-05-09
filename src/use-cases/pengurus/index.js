const { getAllAnggota } = require('../../data-access/anggota.db');
const { UseCaseError } = require('../../entities/error');
const makeAddPengurus = require('./add-pengurus');
const makeGetAnggota = require('./get-anggota');

const getAnggota = makeGetAnggota(getAllAnggota, UseCaseError);
const addPengurus = makeAddPengurus();

const pengurusService = Object.freeze({ getAnggota, addPengurus });

module.exports = pengurusService;
module.exports = { getAnggota, addPengurus };
