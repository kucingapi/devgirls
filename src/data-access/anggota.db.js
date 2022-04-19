const { anggota } = require('../entities');
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
