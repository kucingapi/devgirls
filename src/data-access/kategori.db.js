const { Op } = require('sequelize');
const { Kategori } = require('../entities');
const { findAcaraById } = require('./acara.db');

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
 * @param {Number} idAcara
 * @param {Number} idKategori
 * @returns {Promise}
 */
const createKategoriAcaraAsc = async (idAcara, idKategori) => {
  const acara = await findAcaraById(idAcara);
  const kategori = await Kategori.findByPk(idKategori);
  const asc = await acara.addKategori(kategori);
  return await asc;
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

module.exports = { createKategori, getAllKategori, createKategoriAcaraAsc };
