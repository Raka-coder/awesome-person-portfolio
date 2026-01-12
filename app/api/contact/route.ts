import { transporter, mailOptions } from "@/lib/mailer";
import { contactSchema } from "@/schema/contactSchema";
import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";

// Simple escape function to prevent HTML injection in emails
function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  // 1. Rate Limiting
  const ip = req.headers.get("x-forwarded-for") || "anonymous";
  const isAllowed = rateLimit(ip);

  if (!isAllowed) {
    return NextResponse.json(
      { error: "Terlalu banyak permintaan. Silakan coba lagi nanti." },
      { status: 429 },
    );
  }

  const body = await req.json();
  const validation = contactSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.flatten() },
      { status: 400 },
    );
  }

  const { name, email, message, honeypot } = validation.data;

  // 2. Honeypot check (Bots often fill hidden fields)
  if (honeypot) {
    console.warn("Honeypot filled by:", ip);
    // Return 200 to trick the bot into thinking it succeeded
    return NextResponse.json({ success: true }, { status: 200 });
  }

  // 3. Sanitization
  const sanitizedName = name ? escapeHtml(name) : "Tanpa Nama";
  const sanitizedMessage = escapeHtml(message);

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `Pesan dari ${sanitizedName}`,
      html: `
        <p><strong>Nama:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong><br/>${sanitizedMessage.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json(
      { error: "Gagal mengirim email" },
      { status: 500 },
    );
  }
}