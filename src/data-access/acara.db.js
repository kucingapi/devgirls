const { Op } = require('sequelize');
const { Acara } = require('../entities');

/**
 * @param {String} title
 * @param {String} description
 * @param {String} photo
 * @param {Date} registrationDate,
 * @param {Date} endDate,
 * @returns {Promise}
 */
const createAcara = async (
  title,
  description,
  photo,
  registrationDate,
  endDate,
  poin
) => {
  return await Acara.create({
    judulAcara: title,
    deskripsiAcara: description,
    fotoAcara: photo,
    tanggalPendaftaran: registrationDate,
    tanggalAcara: endDate,
    poin
  });
};

const getAllAcara = async (
  pageNumber,
  pageSize,
  filterTitle,
  filterDescription
) => {
  const offset = (pageNumber - 1) * pageSize;
  return await Acara.findAndCountAll({
    where: {
      judulAcara: {
        [Op.substring]: filterTitle,
      },
      deskripsiAcara: {
        [Op.substring]: filterDescription,
      },
    },
    order: [
      ['aktif', 'DESC'],
      ['createdAt', 'DESC'],
    ],
    limit: pageSize,
    offset: offset,
  });
};

/**
 * @param {number} id
 * @returns {Promise}
 */
const findById = async (id) => {
  return await Acara.findByPk(id);
};

module.exports = { createAcara, getAllAcara, findById };
