const { createAnggota, findAnggota } = require('../../data-access/anggota.db');
const { sequelizeErrorHandler } = require('../../entities/error');
const { register, login } = require('../../validation/anggota.validation');
const bcrypt = require('bcryptjs');
const { UseCaseError } = require('../../entities/error');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const env = dotenv.config().parsed;
const { TOKEN_SECRET } = env || process.env;

const makeRegisterAnggota = require('./register-anggota');
const makeLoginAnggota = require('./login-anggota');
const validate = require('../../validation/validate');

const loginAnggota = makeLoginAnggota(
  bcrypt,
  login,
  validate,
  sequelizeErrorHandler,
  findAnggota,
  UseCaseError,
  jwt,
  TOKEN_SECRET
);

const registerAnggota = makeRegisterAnggota(
  bcrypt,
  register,
  validate,
  sequelizeErrorHandler,
  createAnggota,
  loginAnggota
);

const anggotaService = Object.freeze({
  registerAnggota,
  loginAnggota,
});

module.exports = anggotaService;
module.exports = {
  registerAnggota,
  loginAnggota,
};
