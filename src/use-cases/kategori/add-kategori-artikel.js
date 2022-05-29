const makeAddKategoriArtikel = (createKategoriArtikelAsc,UseCaseError, sequelizeErrorHandler,kategoriAcaraValidation,validate) =>
  async function addKategoriArtikel({ params, body }) {
    validate(kategoriAcaraValidation, params);
    validate(kategoriAcaraValidation, body);
    const { id } = params;
    const { id: idArtikel } = body;
    const asc = await createKategoriArtikelAsc(idArtikel, id).catch(sequelizeErrorHandler);
    if (!asc) throw new UseCaseError(400, 'Already registered');
    return asc;
  };

module.exports = makeAddKategoriArtikel;
