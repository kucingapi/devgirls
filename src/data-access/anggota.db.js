const { Op } = require('sequelize');
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
  return await Anggota.findOne({
    where: {
      email: email,
    },
  });
};

/**
 * @param {number} pageNumber
 * @param {number} pageSize
 * @returns {Promise}
 */
const getAllAnggota = async (pageNumber, pageSize, filterEmail, filterName) => {
  const offset = (pageNumber - 1) * pageSize;
  return await Anggota.findAndCountAll({
    where: {
      email: {
        [Op.substring]: filterEmail,
      },
      namaAnggota: {
        [Op.substring]: filterName,
      },
    },
    order: [['createdAt', 'DESC']],
    limit: pageSize,
    offset: offset,
  });
};

module.exports = {
  createAnggota,
  findAnggota,
  getAllAnggota
};
