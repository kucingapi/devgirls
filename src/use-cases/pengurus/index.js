const { getAllAnggota } = require("../../data-access/anggota.db");
const { UseCaseError } = require("../../entities/error");
const makeGetAnggota = require('./get-anggota');

const getAnggota = makeGetAnggota(getAllAnggota, UseCaseError);

const pengurusService = Object.freeze({ getAnggota });

module.exports = pengurusService;
module.exports = { getAnggota };
