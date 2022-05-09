const {
  getAllAnggota,
  findAnggotaById,
} = require('../../data-access/anggota.db');
const { UseCaseError, sequelizeErrorHandler } = require('../../entities/error');
const {
  addPengurusValidation,
} = require('../../validation/pengurus.validation');
const validate = require('../../validation/validate');
const makeAddPengurus = require('./add-pengurus');
const makeGetAnggota = require('./get-anggota');

const getAnggota = makeGetAnggota(getAllAnggota, UseCaseError);
const addPengurus = makeAddPengurus(
  sequelizeErrorHandler,
  findAnggotaById,
  addPengurusValidation,
  validate
);

const pengurusService = Object.freeze({ getAnggota, addPengurus });

module.exports = pengurusService;
module.exports = { getAnggota, addPengurus };
