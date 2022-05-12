const makeGetAcara = (getAllAcara, UseCaseError) => {
  return async function getAcara({ query }) {
    const page = query.page || 1;
    const filterTitle = query.title || '';
    const filterDescription = query.description || '';
    const pageSize = 10;
    const { rows, count } = await getAllAcara(
      page,
      pageSize,
      filterTitle,
      filterDescription
    ).catch((e) => {
      throw new UseCaseError(300, 'bad request', ...e);
    });
    const manyPage = Math.ceil(count / pageSize);

    const manyArtikel = rows.map((acara) => {
      return acara.dataValues;
    });

    const pagination = {
      page: manyPage,
      per_page: pageSize,
      total_count: count,
    };
    return { _metadata: pagination, records: manyArtikel };
  };
};

module.exports = makeGetAcara;
