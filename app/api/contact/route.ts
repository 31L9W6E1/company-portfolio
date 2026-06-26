import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = String(formData.get("email") ?? "");
  const message = String(formData.get("message") ?? "");

  if (!email.includes("@") || message.trim().length < 10) {
    return NextResponse.json({ ok: false, error: "Invalid inquiry." }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    message: "Inquiry received. Connect a CRM or email provider in this route for production handling."
  });
}
