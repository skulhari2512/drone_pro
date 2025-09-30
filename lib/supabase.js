// lib/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ymrtlcyafzuotngltgcb.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltcnRsY3lhZnp1b3RuZ2x0Z2NiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTczMjU4MjAsImV4cCI6MjA3MjkwMTgyMH0.-BgOxU6DJe8wF0N_tbBeNpVmHtvfv0BG6YcuzPLK1Gc'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)