const { anggota } = require('../entities');
/**
 *
 * @param {{ nama: String, email: String, password: String }} anggotaInfo
 * @returns {Promise} 
 */
const createAnggota = (anggotaInfo) => {
  const { nama, email, password } = anggotaInfo;
  return anggota.create({
    namaAnggota: nama,
    email: email,
    password: password,
  });
};

module.exports = {
  createAnggota,
};
