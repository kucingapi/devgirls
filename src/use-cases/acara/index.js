const makeAddAcara = require('./add-acara');
const makeGetAcara = require('./get-acara');
const makeGetAcaraById = require('./get-acara-by-id');
const makeRegisterAcara = require('./register-acara');
const makeRemoveAcara = require('./remove-acara');
const { createAcara } = require('../../data-access/acara.db');
const { sequelizeErrorHandler } = require('../../entities/error');
const { addAcaraValidation } = require('../../validation/acara.validation');
const validate = require('../../validation/validate');
const schedule = require('node-schedule');

const addAcara = makeAddAcara(
  createAcara,
  sequelizeErrorHandler,
  addAcaraValidation,
  validate,
  schedule
);
const getAcara = makeGetAcara();
const getAcaraById = makeGetAcaraById();
const removeAcara = makeRemoveAcara();
const registerAcara = makeRegisterAcara();

const acaraService = Object.freeze({
  addAcara,
  getAcara,
  getAcaraById,
  removeAcara,
  registerAcara,
});

module.exports = acaraService;
module.exports = {
  addAcara,
  getAcara,
  getAcaraById,
  removeAcara,
  registerAcara,
};
