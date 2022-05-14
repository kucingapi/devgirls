const { Kategori } = require('../entities');

/**
 * @param {String} name
 * @returns {Promise}
 */
const createKategori = async (label) => {
  return await Kategori.create({
    label: label,
  });
};

module.exports = { createKategori };
