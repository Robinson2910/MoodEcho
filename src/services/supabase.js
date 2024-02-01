import { createClient } from "@supabase/supabase-js";
export const supabaseUrl =
  "https://emgrttfawnkyizjlateb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtZ3J0dGZhd25reWl6amxhdGViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY0NTEyNTIsImV4cCI6MjAyMjAyNzI1Mn0.Ahxb8ckEDzAY311W5vIUErdo2gHGDVr65Y4Z7MnCLjM";
const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
export default supabase;
