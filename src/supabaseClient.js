// src/supabaseClient.js

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pbvkzmslnqcbjygdorco.supabase.co"; // replace with your Supabase URL
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBidmt6bXNsbnFjYmp5Z2RvcmNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExNzg2MDEsImV4cCI6MjA2Njc1NDYwMX0.2AM20Z1xh71RinRC-NxxGlO2kRVy05t_tMiWEZbYuBk"; // replace with your anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
