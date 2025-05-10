// src/app/api/send/route.ts
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { sendEmail } from "@/src/lib/resend";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, subject, message } = body;

  

  const result = await sendEmail({ email, subject, message });

  if (result.success) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
