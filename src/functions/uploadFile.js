const { supabase } = require('../entities/supabase');

/**
 * @param {fileUpload.UploadedFile} file
 * @param {String} name
 * @param {String} type
 * @param {String} bucket
 */

const uploadFile = async (file, name, bucket) => {
  return await supabase.storage
    .from(bucket)
    .upload(name, file.data, { contentType: file.mimetype });
};

module.exports = uploadFile;
