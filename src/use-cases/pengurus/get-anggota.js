
const makeGetAnggota = (getAllAnggota ,UseCaseError) => {
  return async function getAnggota({ query }) {
    const page = query.page || 1;
    const filterEmail = query.email || '';
    const filterName = query.name || '';
    const pageSize = 10;
    const { rows, count } = await getAllAnggota(
      page,
      pageSize,
      filterEmail,
      filterName
    ).catch((e) => {
      throw new UseCaseError(300, 'bad request', ...e);
    });
    const manyPage = Math.ceil(count / pageSize);

    const manyAnggota = rows.map((artikel) => {
      return artikel.dataValues;
    });

    const pagination = {
      page: manyPage,
      per_page: pageSize,
      total_count: count,
    };
    return { _metadata: pagination, records: manyAnggota };
  };
};

module.exports = makeGetAnggota;
