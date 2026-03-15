import { NextResponse } from "next/server";
import { Resend } from "resend";
import { listContacts } from "@/lib/resendAudience";

function buildNotificationHtml(trackerUrl: string): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background-color:#0a1628;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a1628;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#111b2e;border-radius:12px;overflow:hidden;max-width:600px;width:100%;border:1px solid rgba(255,255,255,0.1);">
          <tr>
            <td style="background-color:#9C060B;padding:32px;text-align:center;">
              <p style="margin:0 0 8px 0;font-size:40px;">🎅</p>
              <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;">Santa Is On His Way!</h1>
              <p style="margin:8px 0 0 0;color:#ffffff;font-size:14px;opacity:0.9;">Christmas Eve ${new Date().getFullYear()} — The journey has begun</p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;text-align:center;">
              <p style="margin:0 0 16px 0;font-size:16px;color:#e2e8f0;line-height:1.6;">
                It&rsquo;s Christmas Eve and Santa is preparing his sleigh! Track his magical journey around the world in real time.
              </p>
              <p style="margin:0 0 24px 0;font-size:14px;color:#94a3b8;line-height:1.5;">
                Follow the live route, see which regions he&rsquo;s visited, and share the magic with your family.
              </p>
              <a href="${trackerUrl}" style="display:inline-block;padding:14px 32px;background-color:#9C060B;color:#ffffff;font-size:16px;font-weight:600;text-decoration:none;border-radius:8px;">
                Track Santa Live &rarr;
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px 24px 32px;border-top:1px solid rgba(255,255,255,0.1);text-align:center;">
              <p style="margin:0;font-size:12px;color:#64748b;">
                You received this because you signed up for Santa Tracker notifications on SantaGuy.co.uk
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret) {
    console.error("CRON_SECRET is not configured");
    return NextResponse.json(
      { error: "Cron endpoint is not configured." },
      { status: 500 },
    );
  }

  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !fromEmail) {
      console.error("RESEND_API_KEY or CONTACT_FROM_EMAIL is not set");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const contacts = await listContacts();

    if (contacts.length === 0) {
      return NextResponse.json({
        success: true,
        message: "No subscribers to notify.",
        sent: 0,
      });
    }

    const resend = new Resend(apiKey);
    const trackerUrl = "https://www.santaguy.co.uk/santa-tracker";
    const html = buildNotificationHtml(trackerUrl);

    let sent = 0;
    let failed = 0;

    for (const contact of contacts) {
      try {
        const sendResult = await resend.emails.send({
          from: `SantaGuy <${fromEmail}>`,
          to: contact.email,
          subject: "🎅 Santa Is On His Way! Track Him Live Now",
          html,
        });

        if (sendResult.error) {
          console.error(`Failed to send to ${contact.email}:`, sendResult.error);
          failed++;
        } else {
          sent++;
        }
      } catch (err) {
        console.error(`Error sending to ${contact.email}:`, err);
        failed++;
      }
    }

    return NextResponse.json({
      success: true,
      sent,
      failed,
      total: contacts.length,
    });
  } catch (error) {
    console.error("Christmas Eve cron error:", error);
    return NextResponse.json(
      { error: "Failed to send notifications." },
      { status: 500 },
    );
  }
}
