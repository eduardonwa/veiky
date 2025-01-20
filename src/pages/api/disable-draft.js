export async function get({ cookies }) {
  cookies.delete('sanity-draft-mode', { path: '/' });

  return new Response(JSON.stringify({ message: 'Draft mode disabled' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}