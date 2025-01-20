export async function get({ cookies }) {
  cookies.set('sanity-draft-mode', 'true', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 // 24 hours
  });

  return new Response(JSON.stringify({ message: 'Draft mode enabled' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}