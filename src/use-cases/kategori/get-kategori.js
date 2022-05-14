const { getAllKategori } = require('../../data-access/kategori.db');

const makeGetKategori = () => {
  return async function getKategori({ query }) {
    const filterLabel = query.label || '';
    const { rows } = await getAllKategori(filterLabel);
    return rows;
  };
};

module.exports = makeGetKategori;
