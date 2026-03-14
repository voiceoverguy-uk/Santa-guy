import { Resend } from "resend";

const AUDIENCE_NAME = "Santa Tracker Subscribers";

let cachedAudienceId: string | null = null;

function getResend(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
}

export async function getAudienceId(): Promise<string> {
  if (cachedAudienceId) return cachedAudienceId;

  const resend = getResend();

  const { data: audiences, error: listError } = await resend.audiences.list();
  if (listError) {
    throw new Error(`Failed to list audiences: ${listError.message}`);
  }

  const existing = audiences?.data?.find((a) => a.name === AUDIENCE_NAME);
  if (existing) {
    cachedAudienceId = existing.id;
    return existing.id;
  }

  const { data: created, error: createError } = await resend.audiences.create({
    name: AUDIENCE_NAME,
  });
  if (createError || !created) {
    throw new Error(`Failed to create audience: ${createError?.message}`);
  }

  cachedAudienceId = created.id;
  return created.id;
}

async function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function addContact(email: string): Promise<void> {
  const resend = getResend();
  const audienceId = await getAudienceId();

  for (let attempt = 0; attempt < 3; attempt++) {
    const { error } = await resend.contacts.create({
      audienceId,
      email: email.trim().toLowerCase(),
    });

    if (!error) return;

    const msg = error.message?.toLowerCase() ?? "";
    const name = (error as { name?: string }).name?.toLowerCase() ?? "";

    if (msg.includes("already exists") || name === "conflict") {
      return;
    }

    if ((msg.includes("rate") || name === "rate_limit_exceeded") && attempt < 2) {
      await delay(1000 * (attempt + 1));
      continue;
    }

    throw new Error(`Failed to add contact: ${error.message}`);
  }
}

export async function listContacts(): Promise<{ email: string }[]> {
  const resend = getResend();
  const audienceId = await getAudienceId();

  const { data, error } = await resend.contacts.list({ audienceId });
  if (error) {
    throw new Error(`Failed to list contacts: ${error.message}`);
  }

  return (data?.data ?? [])
    .filter((c) => !c.unsubscribed)
    .map((c) => ({ email: c.email }));
}
