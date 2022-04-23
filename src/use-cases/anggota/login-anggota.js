const { findAnggota } = require('../../data-access/anggota.db');
const { login } = require('../../validation/anggota.validation');
const validate = require('../../validation/validate');
const bcrypt = require('bcryptjs');
const { UseCaseError } = require('../../entities/error');
const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');

const env = dotenv.config().parsed;
const { TOKEN_SECRET } = env;

const makeLoginAnggota = () => {
  return async function loginAnggota({ body }) {
    validate(login, body);
    const { email, password } = body;
    const anggotas = await findAnggota(email);
    const anggota = anggotas[0];
    const validPassword = await bcrypt.compare(password, anggota.password);
    if (!validPassword) throw new UseCaseError(400, 'password is wrong');
    const token = jwt.sign(
      {
        id: anggota.id,
        email: anggota.email,
        nama: anggota.nama,
      },
      TOKEN_SECRET
    );

    const header = {
      name: 'auth-token',
      data: token,
    };
    return { header };
  };
};
module.exports = makeLoginAnggota;
