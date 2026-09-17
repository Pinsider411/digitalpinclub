import { Resend } from "resend";

const FROM = "Digital Pin Club <info@pinsider.io>";
const TO = "info@pinsider.io";

export type CreatorSubmissionEmailInput = {
  id: string;
  nameOrHandle: string;
  platforms: string;
  videoUrl: string | null;
  permissionConfirmed: boolean;
  source: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function renderCreatorSubmissionText(input: CreatorSubmissionEmailInput): string {
  return [
    "Watch & Follow creator suggestion",
    "",
    `Name / handle: ${input.nameOrHandle}`,
    `Platforms: ${input.platforms}`,
    `Best Pinnacle video URL: ${input.videoUrl || "(none)"}`,
    `Permission to list: ${input.permissionConfirmed ? "yes" : "no"}`,
    `Source: ${input.source}`,
    `Submission id: ${input.id}`,
    "",
    "Submitted via digitalpinclub Watch & Follow.",
  ].join("\n");
}

export function renderCreatorSubmissionHtml(input: CreatorSubmissionEmailInput): string {
  const rows = [
    ["Name / handle", input.nameOrHandle],
    ["Platforms", input.platforms],
    ["Best Pinnacle video URL", input.videoUrl || "(none)"],
    ["Permission to list", input.permissionConfirmed ? "yes" : "no"],
    ["Source", input.source],
    ["Submission id", input.id],
  ];

  const bodyRows = rows
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:8px 0;color:#9AA8BC;font-size:13px;vertical-align:top;width:160px;">${escapeHtml(label)}</td>
          <td style="padding:8px 0;color:#F5F0E6;font-size:14px;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8" /><title>Creator suggestion</title></head>
<body style="margin:0;padding:24px;background:#0A1628;color:#F5F0E6;font-family:Inter,Segoe UI,Helvetica,Arial,sans-serif;">
  <div style="max-width:560px;margin:0 auto;background:#13243F;border:1px solid #2A3F5F;border-radius:12px;padding:24px;">
    <p style="margin:0 0 6px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#F0D78C;">Digital Pin Club</p>
    <h1 style="margin:0 0 16px;font-size:20px;color:#D4AF37;">Watch &amp; Follow creator suggestion</h1>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${bodyRows}</table>
    <p style="margin:20px 0 0;font-size:12px;color:#9AA8BC;">Submitted via digitalpinclub Watch &amp; Follow.</p>
  </div>
</body>
</html>`;
}

/**
 * Notify info@pinsider.io of a new creator suggestion.
 * No-ops when RESEND_API_KEY is missing. Never throws for API failures.
 */
export async function sendCreatorSubmissionEmail(
  input: CreatorSubmissionEmailInput,
): Promise<{ sent: boolean; id?: string; skipped?: string; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    const skipped = "RESEND_API_KEY not set — creator submission notify skipped";
    console.info("[creator-submission-email]", skipped);
    return { sent: false, skipped };
  }

  const domain = process.env.RESEND_EMAIL_DOMAIN || "pinsider.io";
  const from =
    domain === "pinsider.io" ? FROM : `Digital Pin Club <info@${domain}>`;
  const subject = `Watch & Follow creator suggestion: ${input.nameOrHandle}`;

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send(
      {
        from,
        to: [TO],
        subject,
        html: renderCreatorSubmissionHtml(input),
        text: renderCreatorSubmissionText(input),
      },
      { idempotencyKey: `creator-submission/${input.id}` },
    );

    if (error) {
      const msg = error.message || String(error);
      console.error("[creator-submission-email] Resend rejected:", msg);
      return { sent: false, error: msg };
    }

    console.info("[creator-submission-email] sent", data?.id);
    return { sent: true, id: data?.id };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[creator-submission-email] unexpected failure:", msg);
    return { sent: false, error: msg };
  }
}
