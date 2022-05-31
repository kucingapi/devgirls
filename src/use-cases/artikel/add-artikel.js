const UseCaseError = require('../../entities/error/use-case.error');
const getFileUrl = require('../../functions/getFileUrl');
const uploadFile = require('../../functions/uploadFile');
const { fileValidation } = require('../../validation/general.validation');

const makeAddArtikel = (
  createArticle,
  getPayloadJwt,
  addArtikelValidation,
  validate
) => {
  return async function addArtikel({ headers, body, files }) {
    validate(addArtikelValidation, body);
    validate(fileValidation, files);
    const jwtPayload = getPayloadJwt(headers);
    const { title, description } = body;
    const { file } = files;
    const noPhoto =
      'https://archive.org/download/no-photo-available/no-photo-available.png';
    const { email } = jwtPayload;

    if (!file.mimetype.includes('image')) {
      throw new UseCaseError(401, 'must be an image');
    }

    const artikel = await createArticle(email, title, description, noPhoto);

    await uploadFile(file, artikel.id, 'artikel');
    const photo = await getFileUrl('artikel', artikel.id);
    artikel.fotoArtikel = photo.publicURL;
    await artikel.save();

    return artikel;
  };
};

module.exports = makeAddArtikel;
