const { createClient } = require('@supabase/supabase-js');

const dotenv = require('dotenv');

const env = dotenv.config().parsed;
const { SUPABASE_URL, SUPABASE_KEY } = env || process.env;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

module.exports = { supabase };
