const { findAnggotaById } = require('../../data-access/anggota.db');
const sequelizeErrorHandler = require('../../entities/error/sequelize-handler.error');
const {
  addPengurusValidation,
} = require('../../validation/pengurus.validation');
const validate = require('../../validation/validate');

const makeAddPengurus = () => {
  return async function addPengurus({ params }) {
    validate(addPengurusValidation, params);
    const { id } = params;
    const pengguna = await findAnggotaById(id).catch((e) => {
      sequelizeErrorHandler(e);
    });
    pengguna.set({
      jenisAnggota: 'pengurus',
    });
    console.log(pengguna.jenisAnggota);
    await pengguna.save();
    return pengguna;
  };
};

module.exports = makeAddPengurus;
