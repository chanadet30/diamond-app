export async function POST(req: Request) {
  console.log("API APPELEE");

  const data = await req.json();
  console.log("🔥 NOUVEAU CLIENT:", data);

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
  });
}