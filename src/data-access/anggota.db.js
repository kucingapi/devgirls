const { Anggota } = require('../entities');
/**
 * @param {String} nama
 * @param {String} email
 * @param {String} password
 * @returns {Promise}
 */
const createAnggota = async (nama, email, password) => {
  return await Anggota.create({
    namaAnggota: nama,
    email: email,
    password: password,
  });
};

/**
 * @param {String} email
 * @param {String} password
 * @returns {Promise}
 */
const findAnggota = async (email) => {
  return await Anggota.findAll({
    where: {
      email: email,
    },
  });
};

module.exports = {
  createAnggota,
  findAnggota,
};
