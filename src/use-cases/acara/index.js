const makeAddAcara = require('./add-acara');
const makeGetAcara = require('./get-acara');
const makeGetAcaraById = require('./get-acara-by-id');
const makeRegisterAcara = require('./register-acara');
const makeRemoveAcara = require('./remove-acara');
const {
  createAcara,
  findAcaraById,
  deleteAcara,
  getAllAcaraName,
} = require('../../data-access/acara.db');
const { sequelizeErrorHandler } = require('../../entities/error');
const {
  addAcaraValidation,
  getAcaraByIdValidation,
  userValidation,
} = require('../../validation/acara.validation');
const validate = require('../../validation/validate');
const schedule = require('node-schedule');
const { getAllAcara } = require('../../data-access/acara.db');
const UseCaseError = require('../../entities/error/use-case.error');
const getPayloadJwt = require('../../functions/getPayloadJwt');
const {
  removeArtikelValidation,
} = require('../../validation/artikel.validation');
const { findAnggotaById } = require('../../data-access/anggota.db');
const makeGetAcaraFromAnggota = require('./get-anggota-acara');
const makeGetAcaraName = require('./get-acara-name');

const addAcara = makeAddAcara(
  createAcara,
  sequelizeErrorHandler,
  addAcaraValidation,
  validate,
  schedule
);
const getAcara = makeGetAcara(getAllAcara, UseCaseError);
const getAcaraById = makeGetAcaraById(
  findAcaraById,
  sequelizeErrorHandler,
  UseCaseError,
  getPayloadJwt,
  getAcaraByIdValidation,
  validate
);
const removeAcara = makeRemoveAcara(
  deleteAcara,
  UseCaseError,
  removeArtikelValidation,
  validate
);
const registerAcara = makeRegisterAcara(
  findAcaraById,
  findAnggotaById,
  sequelizeErrorHandler,
  UseCaseError,
  getPayloadJwt,
  getAcaraByIdValidation,
  userValidation,
  validate
);
const getAcaraFromAnggota = makeGetAcaraFromAnggota(
  findAnggotaById,
  sequelizeErrorHandler,
  UseCaseError,
  getPayloadJwt,
  userValidation,
  validate
);

const getAcaraName = makeGetAcaraName(getAllAcaraName, sequelizeErrorHandler);

const acaraService = Object.freeze({
  addAcara,
  getAcara,
  getAcaraById,
  removeAcara,
  registerAcara,
  getAcaraFromAnggota,
  getAcaraName,
});

module.exports = acaraService;
module.exports = {
  addAcara,
  getAcara,
  getAcaraById,
  removeAcara,
  registerAcara,
  getAcaraFromAnggota,
  getAcaraName,
};
