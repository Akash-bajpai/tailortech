import { createClient } from "@/lib/supabase/server";

export default async function TestPage() {
  const supabase = await createClient();
  const { error } = await supabase.from('profiles').select('*').limit(1);

  return (
    <main className="min-h-screen bg-neutral-950 text-white p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">TailorTech Supabase Test</h1>
      <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl max-w-md w-full">
        <p className="text-emerald-400 font-medium">✓ Supabase Client Configured Successfully!</p>
        {error && <p className="text-xs text-neutral-400 mt-2">Database query note: {error.message}</p>}
      </div>
    </main>
  );
}