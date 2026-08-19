import { supabase } from '@/lib/supabase';

// Allow dynamic rendering for this API route
export const dynamic = 'force-dynamic';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const section = searchParams.get('section');

  if (!section) {
    return Response.json({ error: 'section required' }, { status: 400 });
  }

  try {
    const { data, error } = await supabase
      .from('site_content')
      .select('data')
      .eq('section', section)
      .maybeSingle();

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json(data?.data ?? null);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
