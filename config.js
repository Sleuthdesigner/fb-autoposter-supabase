// ============================================
// Scalz.ai Facebook AutoPoster — Supabase Config
// ============================================
// Replace these with your actual Supabase project values.
// Find them at: https://app.supabase.com → Settings → API

const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
