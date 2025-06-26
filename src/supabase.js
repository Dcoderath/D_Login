import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://faljjmrxawvagldepjyz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhbGpqbXJ4YXd2YWdsZGVwanl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5NDkyMzAsImV4cCI6MjA2NjUyNTIzMH0.mwYzyynT4EbwGVCVOAi1b-xL4garxgFsNSKGud3O-1w'; // ✅ this is the anon key

export const supabase = createClient(supabaseUrl, supabaseKey);
