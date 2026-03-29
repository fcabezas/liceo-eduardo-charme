import { NextResponse } from "next/server";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwzr25TAYN6JlppNkkYuoxWtlGxRY8TeRXoAZFmig7qNlsN_J6xSWaJoH8sMYKEuxjgxg/exec?format=json";

export const dynamic = "force-dynamic";

async function fetchFollowingRedirects(url: string, maxRedirects = 5): Promise<Response> {
  let currentUrl = url;
  for (let i = 0; i < maxRedirects; i++) {
    const res = await fetch(currentUrl, { redirect: "manual" });
    if (res.status >= 300 && res.status < 400) {
      const location = res.headers.get("location");
      if (!location) break;
      currentUrl = location;
      continue;
    }
    return res;
  }
  return fetch(currentUrl);
}

export async function GET() {
  try {
    const res = await fetchFollowingRedirects(APPS_SCRIPT_URL);

    const text = await res.text();

    try {
      const data = JSON.parse(text);
      return NextResponse.json(data, {
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        },
      });
    } catch {
      return NextResponse.json(
        { error: "La respuesta no es JSON válido", raw: text.slice(0, 200) },
        { status: 502 }
      );
    }
  } catch (err) {
    return NextResponse.json(
      {
        error: "No se pudo conectar con el servidor de evaluaciones",
        detail: err instanceof Error ? err.message : String(err),
      },
      { status: 500 }
    );
  }
}
