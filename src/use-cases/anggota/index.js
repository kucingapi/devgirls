const { createAnggota } = require('../../data-access/anggota.db');
const { sequelizeErrorHandler } = require('../../entities/error');
const { register } = require('../../validation/anggota.validation');
const bcrypt = require('bcryptjs');

const makeRegisterAnggota = require('./register-anggota');
const makeLoginAnggota = require('./login-anggota');
const validate = require('../../validation/validate');

const registerAnggota = makeRegisterAnggota(
  bcrypt,
  register,
  validate,
  sequelizeErrorHandler,
  createAnggota
);

const loginAnggota = makeLoginAnggota();

const anggotaService = Object.freeze({
  registerAnggota,
  loginAnggota
});

module.exports = anggotaService;
module.exports = {
  registerAnggota,
  loginAnggota
};
