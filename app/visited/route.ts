import { cookies } from "next/headers";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return new Response("Missing searchParams `id`", { status: 400 });
  }
  const cookieStore = cookies();
  const visited_id = cookieStore.get("visited_id");

  if (!visited_id) {
    return new Response("Hello, Next.js!", {
      status: 200,
      headers: { "Set-Cookie": `visited_id=` },
    });
  }

  if (visited_id?.value.includes(id)) {
    return new Response("Page already visited");
  }

  return new Response("Hello, Next.js!", {
    status: 200,
    headers: { "Set-Cookie": `visited_id=${visited_id?.value.concat(id)}` },
  });
}
