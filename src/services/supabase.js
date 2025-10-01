import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hinxiizzqfuqyrvyhvob.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpbnhpaXp6cWZ1cXlydnlodm9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM2MDc5ODksImV4cCI6MjA1OTE4Mzk4OX0.S9l247WuO5TZKigFzjMpCc32ZK5WlFoIcMvD3qrNbqI";
export const supabase = createClient(supabaseUrl, supabaseKey);
