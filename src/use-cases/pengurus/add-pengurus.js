const makeAddPengurus = (
  sequelizeErrorHandler,
  findAnggotaById,
  addPengurusValidation,
  validate
) => {
  return async function addPengurus({ params }) {
    validate(addPengurusValidation, params);
    const { id } = params;
    const pengguna = await findAnggotaById(id).catch((e) => {
      sequelizeErrorHandler(e);
    });
    pengguna.set({
      jenisAnggota: 'pengurus',
    });
    await pengguna.save();
    return pengguna;
  };
};

module.exports = makeAddPengurus;
