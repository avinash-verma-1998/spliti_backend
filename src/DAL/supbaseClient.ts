
import { createClient } from '@supabase/supabase-js'
const dotenv = require("dotenv");
dotenv.config();
const supabaseUrl = 'https://hnnkiibhoerjjtockjtv.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY

console.log(supabaseKey);
export const supabase = createClient(supabaseUrl, supabaseKey??"");
