import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn(
        "[Contact API] RESEND_API_KEY is not configured in environment variables."
      );
      return NextResponse.json(
        {
          error:
            "Email service is not configured yet. Please add RESEND_API_KEY to your .env.local and Vercel settings.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "Mansha Portfolio <onboarding@resend.dev>",
      to: ["manshahussain520@gmail.com"],
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
          <div style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); padding: 24px; color: #ffffff;">
            <h1 style="margin: 0; font-size: 20px; font-weight: bold; letter-spacing: -0.02em;">New Contact Inquiry</h1>
            <p style="margin: 6px 0 0 0; opacity: 0.9; font-size: 13px;">Received from Mansha Hussain Portfolio Website</p>
          </div>
          <div style="padding: 24px; color: #1e293b;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #64748b; width: 90px; font-weight: 600;">Sender:</td>
                <td style="padding: 8px 0; font-size: 14px; font-weight: bold; color: #0f172a;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #64748b; font-weight: 600;">Email:</td>
                <td style="padding: 8px 0; font-size: 14px; color: #2563eb;">
                  <a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #64748b; font-weight: 600;">Date:</td>
                <td style="padding: 8px 0; font-size: 13px; color: #475569;">${new Date().toLocaleString()}</td>
              </tr>
            </table>

            <div style="margin-top: 16px;">
              <h3 style="margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">Message Content:</h3>
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #2563eb; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${message}</div>
            </div>

            <div style="margin-top: 24px; text-align: center;">
              <a href="mailto:${email}?subject=Re:%20Portfolio%20Inquiry" style="display: inline-block; background: #2563eb; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-size: 13px; font-weight: bold;">
                Reply Directly to ${name}
              </a>
            </div>
          </div>
          <div style="background: #f8fafc; padding: 12px 24px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 11px; color: #94a3b8;">
            Sent automatically from Mansha Hussain Portfolio &bull; All Rights Reserved
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("[Contact API Error]", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      messageId: data?.id,
    });
  } catch (err: unknown) {
    console.error("[Contact API Catch Error]", err);
    const message = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
