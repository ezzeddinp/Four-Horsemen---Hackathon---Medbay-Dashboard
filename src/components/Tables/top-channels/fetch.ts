import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function getTopPatients() {
  const { data, error } = await supabase
    .from("pasien")
    .select("nama_lengkap, email, nomor_telepon")
    .limit(10);

  if (error) throw error;

  return data;
}

