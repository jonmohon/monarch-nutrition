import { NextResponse } from "next/server";
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
import { z } from "zod";

/**
 * Contact endpoint — HIPAA-conscious by design (handoff p.4):
 * - Accepts name/email/phone ONLY; .strict() rejects any extra keys.
 * - No persistence, no field values in logs, reply-to = submitter.
 * - Honeypot + minimum-submit-time spam traps; never fake success.
 *
 * Delivery is AWS SES. Credentials are passed explicitly rather than taken
 * from the default provider chain: the Amplify SSR runtime has no compute
 * role attached, and Lambda reserves the AWS_ACCESS_KEY_ID / AWS_SECRET_
 * ACCESS_KEY names, so they are carried under SES_-prefixed vars instead.
 * Region defaults to us-east-1 — the only region on this account with SES
 * production access (us-east-2 is still sandboxed at 200 msg/day).
 */
const ContactSchema = z
  .object({
    name: z.string().trim().min(1).max(100),
    email: z.string().trim().email().max(254),
    phone: z
      .string()
      .trim()
      .max(20)
      .regex(/^[0-9()+\-.\s]{7,20}$/, "invalid phone"),
    company: z.string().max(200).optional().default(""), // honeypot — non-empty = bot
    elapsed: z.number().min(0),
  })
  .strict();

export async function POST(request: Request) {
  let parsed;
  try {
    parsed = ContactSchema.safeParse(await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check your name, email, and phone number." },
      { status: 400 },
    );
  }
  const { name, email, phone, company, elapsed } = parsed.data;

  // Spam traps: filled honeypot or sub-3s submit → pretend nothing happened.
  // Note the absent `sent` flag: the bot sees an ordinary success, while the
  // client can still tell this apart from a real send and skip the analytics
  // conversion event (otherwise every trapped bot inflates the lead count).
  if (company || elapsed < 3000) {
    return NextResponse.json({ ok: true });
  }

  const accessKeyId = process.env.SES_ACCESS_KEY_ID;
  const secretAccessKey = process.env.SES_SECRET_ACCESS_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!accessKeyId || !secretAccessKey || !to || !from) {
    console.error("[contact] email service env vars missing");
    return NextResponse.json(
      { error: "Email service is not configured. Please try again later." },
      { status: 503 },
    );
  }

  try {
    const ses = new SESv2Client({
      region: process.env.SES_REGION ?? "us-east-1",
      credentials: { accessKeyId, secretAccessKey },
    });
    const html = `
        <div style="font-family:Georgia,serif;max-width:520px;margin:0 auto;border:1px solid #E5D9C6;border-radius:12px;overflow:hidden">
          <div style="background:#3E2B23;color:#F7F0E4;padding:18px 24px;font-size:15px;letter-spacing:.08em;text-transform:uppercase">
            Monarch Nutrition Counseling — New Inquiry
          </div>
          <div style="padding:24px;background:#FDFAF4;color:#3E2B23;font-size:16px;line-height:1.7">
            <p style="margin:0 0 8px"><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p style="margin:0 0 8px"><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p style="margin:0"><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          </div>
          <div style="padding:14px 24px;background:#F7F0E4;color:#7D695C;font-size:12px">
            Sent from the website contact form. Reply goes to the submitter.
          </div>
        </div>`;

    await ses.send(
      new SendEmailCommand({
        FromEmailAddress: from,
        Destination: { ToAddresses: [to] },
        ReplyToAddresses: [email],
        Content: {
          Simple: {
            Subject: { Data: "New contact — Monarch Nutrition Counseling", Charset: "UTF-8" },
            Body: { Html: { Data: html, Charset: "UTF-8" } },
          },
        },
      }),
    );
    // SES throws on failure rather than returning an error object, so
    // reaching here means the message was accepted for delivery.
    return NextResponse.json({ ok: true, sent: true });
  } catch (err) {
    // Log the error name only — never field values (no PII in logs).
    console.error(
      "[contact] send failed:",
      err instanceof Error ? err.name : "unknown",
    );
    return NextResponse.json(
      { error: "We couldn't send your message. Please try again." },
      { status: 502 },
    );
  }
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
