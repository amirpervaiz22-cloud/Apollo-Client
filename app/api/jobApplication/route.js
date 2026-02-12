import { NextResponse } from "next/server";
import { transporter } from "../../lib/mail";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, experience, expertise, summary } = body;

    await transporter.sendMail({
      from: `"Apollo Careers" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "New Job Application",
      html: `
        <h2>Job Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong><br>${phone}</p>
        <p><strong>Experience:</strong><br>${experience}</p>
        ${expertise?.length > 0 
          ? `<p><strong>Expertise:</strong><ul>${expertise.map(exp => `<li>${exp}</li>`).join("")}</ul></p>` 
          : ""}
        <p><strong>Summary:</strong><br>${summary}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Application sent" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}