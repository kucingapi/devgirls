const { getAllArtikel } = require('../../data-access/artikel.db');
const { UseCaseError } = require('../../entities/error');

const makeGetArtikel = () => {
  return async function getArtikel({ query }) {
    const page = query.page || 1;
    const filterTitle = query.title || '';
    const filterDescription = query.description || '';
    const pageSize = 10;
    const { rows, count } = await getAllArtikel(
      page,
      pageSize,
      filterTitle,
      filterDescription
    ).catch((e) => {
      throw new UseCaseError(300, 'bad request', ...e);
    });
    const manyPage = Math.ceil(count / pageSize);

    const manyArtikel = rows.map((artikel) => {
      return artikel.dataValues;
    });

    const pagination = {
      page: manyPage,
      per_page: pageSize,
      total_count: count,
    };
    return { _metadata: pagination, records: manyArtikel };
  };
};

module.exports = makeGetArtikel;
