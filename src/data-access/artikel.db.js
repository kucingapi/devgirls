const { Artikel } = require('../entities');
const { findAnggota } = require('./anggota.db');

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
      id: id
    },
  });
};
module.exports = { createArticle, deleteArtikel };
