import { NextResponse } from "next/server";

const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL ?? "";

const ALLOWED_REDIRECT_HOSTS = [
  "script.google.com",
  "script.googleusercontent.com",
];

export const dynamic = "force-dynamic";

function isAllowedRedirect(location: string): boolean {
  try {
    const url = new URL(location);
    return ALLOWED_REDIRECT_HOSTS.some((h) => url.hostname.endsWith(h));
  } catch {
    return false;
  }
}

async function fetchFollowingRedirects(url: string, maxRedirects = 3): Promise<Response> {
  let currentUrl = url;
  for (let i = 0; i < maxRedirects; i++) {
    const res = await fetch(currentUrl, { redirect: "manual" });
    if (res.status >= 300 && res.status < 400) {
      const location = res.headers.get("location");
      if (!location || !isAllowedRedirect(location)) break;
      currentUrl = location;
      continue;
    }
    return res;
  }
  return fetch(currentUrl);
}

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 30;
const RATE_WINDOW = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

export async function GET(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Demasiadas solicitudes. Intenta nuevamente en un momento." },
      { status: 429 }
    );
  }

  if (!APPS_SCRIPT_URL) {
    return NextResponse.json(
      { error: "Servicio no configurado" },
      { status: 503 }
    );
  }

  try {
    const res = await fetchFollowingRedirects(APPS_SCRIPT_URL);
    const text = await res.text();

    try {
      const data = JSON.parse(text);
      return NextResponse.json(data, {
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
        },
      });
    } catch {
      return NextResponse.json(
        { error: "Error al procesar datos de evaluaciones" },
        { status: 502 }
      );
    }
  } catch {
    return NextResponse.json(
      { error: "No se pudo conectar con el servidor de evaluaciones" },
      { status: 500 }
    );
  }
}
