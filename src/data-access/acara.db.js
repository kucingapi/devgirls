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
  endDate
) => {
  return await Acara.create({
    judulAcara: title,
    deskripsiAcara: description,
    fotoAcara: photo,
    tanggalPendaftaran: registrationDate,
    tanggalAcara: endDate,
  });
};

module.exports = { createAcara };
