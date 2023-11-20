import { createClient } from '@supabase/supabase-js';

export default createClient(process.env.PROJECT_URL, process.env.SERVICE_KEY);
