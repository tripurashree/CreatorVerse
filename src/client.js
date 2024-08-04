import { createClient } from "@supabase/supabase-js";

const URL = 'https://ngqdzmgikzwtfwgcyemf.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ncWR6bWdpa3p3dGZ3Z2N5ZW1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA3MTI4OTEsImV4cCI6MjAzNjI4ODg5MX0.NA42wqRXpZcrN8oH6O0n0hNypNphGpBTXV_azUvA2mQ'

export const supabase = createClient(URL, API_KEY)
