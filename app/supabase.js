import { createClient } from '@supabase/supabase-js';

const url=process.env.NEXT_PUBLIC_SUPABASE_URL
const key =process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const key2=process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY

export default createClient(url,key, process.env.NEXT_PUBLIC_SUPABASE_API_KEY);

export const getServiceSupabase =()=>createClient(url,key2, process.env.NEXT_PUBLIC_SUPABASE_API_KEY,process.env.SUPABASE_SERVICE_KEY);
