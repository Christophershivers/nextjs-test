
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabaseUrl = 'https://cjwrgamgdetsimyjxjbb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqd3JnYW1nZGV0c2lteWp4amJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk1OTk5MjUsImV4cCI6MjAyNTE3NTkyNX0.7Pdb2AJSpvCxHedfANUSiUf6lcIxA1jj56ZS9uCAWQU'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase