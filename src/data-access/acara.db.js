const { Op } = require('sequelize');
const { Acara } = require('../entities');
const { Kategori } = require('../entities');

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
  poin,
  startTime,
  endTime
) => {
  return await Acara.create({
    judulAcara: title,
    deskripsiAcara: description,
    fotoAcara: photo,
    tanggalPendaftaran: registrationDate,
    tanggalAcara: endDate,
    poin,
    waktuMulai: startTime,
    waktuBerakhir: endTime,
  });
};

const getAllAcara = async (
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

  return await Acara.findAndCountAll({
    include,
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
const findAcaraById = async (id) => {
  const acara = await Acara.findByPk(id);
  if (!acara) return { acara: null, kategori: null };
  const kategori = await acara.getKategoris();
  return { acara, kategori };
};

/**
 * @param {number} id
 * @returns {Promise}
 */
const deleteAcara = async (id) => {
  return await Acara.destroy({
    where: {
      id: id,
    },
  });
};

module.exports = { createAcara, getAllAcara, findAcaraById, deleteAcara };
