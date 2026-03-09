import { NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 60 * 60 * 1000;

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

function buildEmailHtml(safeName: string, safeEmail: string, safeReason: string, safeMessage: string): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;max-width:600px;width:100%;">
          <!-- Header -->
          <tr>
            <td style="background-color:#9C060B;padding:24px 32px;">
              <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:700;">New SantaGuy Website Enquiry</h1>
              <p style="margin:4px 0 0 0;color:#ffffff;font-size:13px;opacity:0.85;">SantaGuy.co.uk</p>
            </td>
          </tr>
          <!-- Details -->
          <tr>
            <td style="padding:28px 32px 0 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:0 0 16px 0;border-bottom:1px solid #e5e7eb;">
                    <p style="margin:0 0 2px 0;font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.5px;font-weight:600;">Name</p>
                    <p style="margin:0;font-size:15px;color:#111827;">${safeName}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 0;border-bottom:1px solid #e5e7eb;">
                    <p style="margin:0 0 2px 0;font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.5px;font-weight:600;">Email</p>
                    <p style="margin:0;font-size:15px;"><a href="mailto:${safeEmail}" style="color:#9C060B;text-decoration:none;">${safeEmail}</a></p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 0 0 0;">
                    <p style="margin:0 0 2px 0;font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.5px;font-weight:600;">Reason</p>
                    <p style="margin:0;font-size:15px;color:#111827;">${safeReason}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Message -->
          <tr>
            <td style="padding:24px 32px;">
              <p style="margin:0 0 8px 0;font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.5px;font-weight:600;">Message</p>
              <div style="background-color:#f9fafb;border:1px solid #e5e7eb;border-radius:6px;padding:16px;font-size:14px;color:#374151;line-height:1.6;">
                ${safeMessage}
              </div>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:16px 32px 24px 32px;border-top:1px solid #e5e7eb;">
              <p style="margin:0;font-size:12px;color:#9ca3af;text-align:center;">Sent from the SantaGuy website contact form</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, reason, message, website } = body;

    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !reason || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (typeof message === "string" && message.trim().length < 25) {
      return NextResponse.json(
        { error: "Please enter at least 25 characters so we have enough detail to help." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const contactTo = process.env.CONTACT_TO_EMAIL;
    const contactFrom = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later or email us directly." },
        { status: 500 }
      );
    }

    if (!contactTo || !contactFrom) {
      console.error("CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL is not set");
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later or email us directly." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeReason = escapeHtml(reason);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const html = buildEmailHtml(safeName, safeEmail, safeReason, safeMessage);

    const result = await resend.emails.send({
      from: `SantaGuy Website <${contactFrom}>`,
      to: contactTo,
      replyTo: email,
      subject: `SantaGuy Enquiry: ${safeReason}`,
      html,
    });

    console.log("Resend API response:", JSON.stringify(result));

    if (result.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again or email us directly." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
