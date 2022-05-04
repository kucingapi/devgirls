const makeUpdateArtikel = (
  changeArtikel,
  findArtikelById,
  getArtikelByIdValidation,
  updateArtikelValidation,
	validate
) => {
  return async function updateArtikel({ params, body }) {
    validate(getArtikelByIdValidation, params);
    validate(updateArtikelValidation, body);
    const { id } = params;
    const oldArtikel = await findArtikelById(id);
    const title = body.title || oldArtikel.judulArtikel;
    const description = body.description || oldArtikel.deskripsiArtikel;
    const photo = body.photo || oldArtikel.fotoArtikel;
    return await changeArtikel(id, title, description, photo);
  };
};

module.exports = makeUpdateArtikel;
