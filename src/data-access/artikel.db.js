const { Artikel, Kategori } = require('../entities');
const { findAnggota } = require('./anggota.db');
const { Op } = require('sequelize');

/**
 * @param {String} email
 * @param {String} judul
 * @param {String} deskripsi
 * @param {String} photo
 * @returns {Promise}
 */
const createArticle = async (email, judul, deskripsi, photo) => {
  const anggota = await findAnggota(email);
  const artikel = await anggota.createArtikel({
    judulArtikel: judul,
    deskripsiArtikel: deskripsi,
    fotoArtikel: photo,
  });
  return artikel;
};

/**
 * @param {Number} id
 * @param {String} judul
 * @param {String} deskripsi
 * @param {String} photo
 * @returns {Promise}
 */
const changeArtikel = async (id, judul, deskripsi, photo) => {
  return await Artikel.update(
    {
      judulArtikel: judul,
      deskripsiArtikel: deskripsi,
      fotoArtikel: photo,
    },
    {
      where: {
        id: id,
      },
    }
  );
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
  filterDescription,
  filterTag
) => {
  const offset = (pageNumber - 1) * pageSize;

  const kategori = await Kategori.findOne({
    where: {
      label: {
        [Op.substring]: filterTag,
      },
    },
  });

  const include =
    filterTag === null
      ? []
      : {
          model: Kategori,
          where: { id: { [Op.in]: [kategori.id] } },
        };

  return await Artikel.findAndCountAll({
    include,
    where: {
      judulArtikel: {
        [Op.substring]: filterTitle,
      },
      deskripsiArtikel: {
        [Op.substring]: filterDescription,
      },
    },
    attributes: [
      'id',
      'judulArtikel',
      'fotoArtikel',
      'deskripsiArtikel',
      'createdAt',
    ],
    order: [['createdAt', 'DESC']],
    limit: pageSize,
    offset: offset,
  });
};

/**
 * @param {number} id
 * @returns {Promise}
 */
const findArtikelById = async (id) => {
  const artikel = await Artikel.findByPk(id);
  if (artikel === null) {
    return null;
  }
  const kategori = await artikel.getKategoris();
  return { artikel, kategori };
};
module.exports = {
  createArticle,
  deleteArtikel,
  getAllArtikel,
  findArtikelById,
  changeArtikel,
};
