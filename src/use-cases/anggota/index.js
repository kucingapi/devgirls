const { createAnggota } = require('../../data-access/anggota.db');
const { UseCaseError, sequelizeErrorHandler } = require('../../entities/error');
const { register } = require('../../validation/anggota.validation');
const bcrypt = require('bcryptjs');

const makeRegisterAnggota = require('./register-anggota');

const registerAnggota = makeRegisterAnggota(
  bcrypt,
  register,
  UseCaseError,
  sequelizeErrorHandler,
  createAnggota
);

const anggotaService = Object.freeze({
  registerAnggota,
});

module.exports = anggotaService;
module.exports = {
  registerAnggota,
};
