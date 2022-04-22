const { Anggota } = require("../entities");

/**
 *
 * @param {{ nama: String, email: String, password: String }} anggotaInfo
 * @returns {Promise} 
 */
const createAnggota = async (nama, email, password) => {
  return await Anggota.create({
    namaAnggota: nama,
    email: email,
    password: password,
  });
};

module.exports = {
  createAnggota,
};
