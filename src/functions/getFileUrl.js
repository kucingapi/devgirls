const { supabase } = require('../entities/supabase');
/**
 *
 * @param {String} bucket
 * @param {String} name
 * @returns
 */
const getFileUrl = async (bucket, name) => {
  return await supabase.storage.from(bucket).getPublicUrl(name);
};

module.exports = getFileUrl;
