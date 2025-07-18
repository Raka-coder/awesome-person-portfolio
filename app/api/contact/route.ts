import { transporter, mailOptions } from "@/lib/mailer";
import { contactSchema } from "@/schema/contactSchema";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const validation = contactSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.flatten() },
      { status: 400 },
    );
  }

  const { name, email, message } = validation.data;

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `Pesan dari ${name ?? "Tanpa Nama"}`,
      html: `
        <p><strong>Nama:</strong> ${name ?? "Tidak diisi"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong><br/>${message}</p>
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