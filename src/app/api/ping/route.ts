import { NextResponse } from "next/server";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  console.log("[PING] API chiamata correttamente");
  return NextResponse.json({ ok: true, msg: "funziona 🎉" });
}
