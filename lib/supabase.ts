import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  completion_year: number;
  image_url: string | null;
  capacity: string | null;
  tags: string[];
  created_at: string;
  updated_at: string;
}
