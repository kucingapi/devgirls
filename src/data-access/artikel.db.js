const { Artikel } = require('../entities');
const { findAnggota } = require('./anggota.db');
const { Op } = require('sequelize');

/**
 * @param {String} email
 * @param {String} judul
 * @param {String} deskripsi
 * @returns {Promise}
 */
const createArticle = async (email, judul, deskripsi) => {
  const anggota = await findAnggota(email);
  const artikel = await anggota.createArtikel({
    judulArtikel: judul,
    deskripsiArtikel: deskripsi,
  });
  return artikel;
};

/**
 * @param {number} id
 * @returns {Promise}
 */
const deleteArtikel = async (id) => {
  return await Artikel.destroy({
    where: {
      id: id,
    },
  });
};

/**
 * @param {number} pageNumber
 * @param {number} pageSize
 * @returns {Promise}
 */
const getAllArtikel = async (
  pageNumber,
  pageSize,
  filterTitle,
  filterDescription
) => {
  const offset = (pageNumber - 1) * pageSize;
  return await Artikel.findAndCountAll({
    where: {
      judulArtikel: {
        [Op.substring]: filterTitle,
      },
      deskripsiArtikel: {
        [Op.substring]: filterDescription,
      },
    },
    attributes: ['id', 'judulArtikel', 'deskripsiArtikel', 'createdAt'],
    order: [['createdAt', 'DESC']],
    limit: pageSize,
    offset: offset,
  });
};
module.exports = { createArticle, deleteArtikel, getAllArtikel };
