import { NextResponse } from "next/server";
import { transporter } from "../../lib/mail";

export async function POST(req) {
  try {
    const body = await req.json(); // Next.js uses .json() instead of body-parser
    const { name, practice, email, phone, billing, goals, specialty } = body;

    await transporter.sendMail({
      from: `"New Lead" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Lead</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company/Practice:</strong><br>${practice}</p>
        ${phone?.toString().length >= 9 ? `<p><strong>Phone:</strong><br>${phone}</p>` : ""}
        ${billing ? `<p><strong>Current Billing Software:</strong><br>${billing}</p>` : ""}
        <p><strong>Challenges/Goals:</strong><br>${goals}</p>
        <p><strong>Medical Specialty:</strong><br>${specialty}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Email sent" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}