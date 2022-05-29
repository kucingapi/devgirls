const makeAddKategori = (createKategori, addKategoriValidation, validate) => {
  return async function addKategori({ body }) {
    validate(addKategoriValidation, body);
    const { label } = body;
    const kategori = await createKategori(label);
    return kategori;
  };
};

module.exports = makeAddKategori;
