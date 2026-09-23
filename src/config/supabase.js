const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase credentials. Please check your .env file.');
}

if (supabaseUrl === 'your_project_url' || supabaseKey === 'your_anon_key') {
  console.warn('Warning: Using placeholder Supabase credentials. Please update .env with real credentials.');
}

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;