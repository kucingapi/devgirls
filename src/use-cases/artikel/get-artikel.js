const makeGetArtikel = (getAllArtikel, UseCaseError) => {
  return async function getArtikel({ query }) {
    const page = query.page || 1;
    const filterTitle = query.title || '';
    const filterDescription = query.description || '';
    const filterTag = query.tag || null;

    const pageSize = 10;
    const { rows, count } = await getAllArtikel(
      page,
      pageSize,
      filterTitle,
      filterDescription,
      filterTag
    ).catch((e) => {
      throw new UseCaseError(300, 'bad request', ...e);
    });
    const manyPage = Math.ceil(count / pageSize);

    const manyArtikel = await Promise.all(
      rows.map(async (artikel) => {
        const kategori = await artikel.getKategoris();
        return { ...artikel.dataValues, kategori };
      })
    );

    const pagination = {
      page: manyPage,
      per_page: pageSize,
      total_count: count,
    };
    return { _metadata: pagination, records: manyArtikel };
  };
};

module.exports = makeGetArtikel;
