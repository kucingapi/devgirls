const UseCaseError = require('../../entities/error/use-case.error');
const getFileUrl = require('../../functions/getFileUrl');
const uploadFile = require('../../functions/uploadFile');
const { fileValidation } = require('../../validation/general.validation');

const makeAddAcara = (
  createAcara,
  sequelizeErrorHandler,
  addAcaraValidation,
  validate,
  schedule
) => {
  return async function addAcara({ body, files }) {
    validate(addAcaraValidation, body);
    console.log(files);
    validate(fileValidation, files);
    const { title, description, registrationDate, endDate, poin } = body;
    const { file } = files;
    const noPhoto =
      'https://archive.org/download/no-photo-available/no-photo-available.png';

    if (!file.mimetype.includes('image')) {
      throw new UseCaseError(401, 'must be an image');
    }

    const newAcara = await createAcara(
      title,
      description,
      noPhoto,
      registrationDate,
      endDate,
      poin
    ).catch(sequelizeErrorHandler);
    const date = new Date(endDate);
    schedule.scheduleJob(date, async function () {
      newAcara.set({
        aktif: false,
      });
      await newAcara.save();
    });

    await uploadFile(file, newAcara.id, 'acara');
    const photo = await getFileUrl('acara', newAcara.id);
    newAcara.fotoAcara = photo.publicURL;
    await newAcara.save();

    return newAcara;
  };
};

module.exports = makeAddAcara;
