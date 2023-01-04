const makeGetArtikelById = (
  findArtikelById,
  getArtikelByIdValidation,
  validate,
  UseCaseError
) => {
  return async function getArtikelById({ params }) {
    validate(getArtikelByIdValidation, params);
    const { id } = params;

    const { artikel, kategori } = await findArtikelById(id).catch((e) => {
      throw new UseCaseError(500, 'database error', ...e);
    });
    if (artikel === null) {
      throw new UseCaseError(404, 'aritikel not found');
    }
    return { artikel, kategori };
  };
};

module.exports = makeGetArtikelById;
