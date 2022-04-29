const { findAnggota } = require('./anggota.db');

/**
 * @param {String} email
 * @param {String} password
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

module.exports = { createArticle };
