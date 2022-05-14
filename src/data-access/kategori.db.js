const { Op } = require('sequelize');
const { Kategori } = require('../entities');

/**
 * @param {String} label
 * @returns {Promise}
 */
const createKategori = async (label) => {
  return await Kategori.create({
    label: label,
  });
};

/**
 * @param {String} label
 * @returns {Promise}
 */
const getAllKategori = async (label) => {
  return await Kategori.findAndCountAll({
    where: {
      label: {
        [Op.substring]: label,
      },
    },
  });
};

module.exports = { createKategori, getAllKategori };
