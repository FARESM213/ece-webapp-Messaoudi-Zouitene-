import { createClient } from '@supabase/supabase-js';

const url=process.env.NEXT_PUBLIC_SUPABASE_URL
const key =process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export default createClient(url,key, process.env.NEXT_PUBLIC_SUPABASE_API_KEY);