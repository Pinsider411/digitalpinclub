import { Resend } from "resend";

const COLORS = {
  bg: "#0A1628",
  surface: "#0F1F38",
  card: "#13243F",
  border: "#2A3F5F",
  gold: "#D4AF37",
  soft: "#F0D78C",
  text: "#F5F0E6",
  muted: "#9AA8BC",
} as const;

const FROM = "Digital Pin Club <info@pinsider.io>";
const SUBJECT = "Welcome to Digital Pin Club";
const SITE_URL = "https://digitalpinclub.com";
const PINSIDER_URL = "https://pinsider.io";
const COMMUNITY_URL = "https://digitalpinclub.com/community";

export type WelcomeEmailInput = {
  name: string;
  email: string;
  /** Stable id for Resend idempotency (e.g. club_members.id) */
  memberId?: string;
};

export function firstNameFrom(name: string): string {
  const part = name.trim().split(/\s+/)[0];
  return part || "collector";
}

export function renderWelcomeEmailHtml(name: string): string {
  const first = firstNameFrom(name);
  const year = new Date().getFullYear();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${SUBJECT}</title>
</head>
<body style="margin:0;padding:0;background:${COLORS.bg};color:${COLORS.text};font-family:Inter,Segoe UI,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${COLORS.bg};padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:${COLORS.card};border:1px solid ${COLORS.border};border-radius:16px;overflow:hidden;">
          <tr>
            <td style="padding:28px 28px 12px;border-bottom:1px solid ${COLORS.border};">
              <p style="margin:0 0 6px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:${COLORS.soft};">Digital Pin Club</p>
              <h1 style="margin:0;font-size:26px;line-height:1.25;color:${COLORS.gold};font-weight:700;">Welcome aboard</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:28px;">
              <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:${COLORS.text};">
                Hi ${escapeHtml(first)},
              </p>
              <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:${COLORS.text};">
                You’re on the roster. Thanks for joining Digital Pin Club — an independent fan community for Disney digital pin collectors.
              </p>
              <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:${COLORS.muted};">
                Browse calendars, learn guides, community spots, and the PinSider data desk whenever you’re ready. No store energy — just collectors helping collectors.
              </p>
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 24px;">
                <tr>
                  <td style="border-radius:999px;background:${COLORS.gold};">
                    <a href="${SITE_URL}" style="display:inline-block;padding:12px 22px;font-size:14px;font-weight:600;color:${COLORS.bg};text-decoration:none;">
                      Visit digitalpinclub.com
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin:0 0 8px;font-size:14px;line-height:1.55;color:${COLORS.muted};">
                Optional next steps:
              </p>
              <ul style="margin:0 0 24px;padding-left:18px;color:${COLORS.text};font-size:14px;line-height:1.7;">
                <li><a href="${COMMUNITY_URL}" style="color:${COLORS.soft};text-decoration:underline;">Community</a> — say hello and find fellow traders</li>
                <li><a href="${PINSIDER_URL}" style="color:${COLORS.soft};text-decoration:underline;">PinSider</a> — prices, alerts, and history next door</li>
              </ul>
              <p style="margin:0;font-size:13px;line-height:1.55;color:${COLORS.muted};">
                Glad you’re here — see you around the clubhouse.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 28px 28px;border-top:1px solid ${COLORS.border};background:${COLORS.surface};">
              <p style="margin:0 0 8px;font-size:12px;line-height:1.5;color:${COLORS.muted};">
                Digital Pin Club is an independent fan community. Not affiliated with, endorsed by, or sponsored by The Walt Disney Company, Disney Pinnacle, or related entities.
              </p>
              <p style="margin:0;font-size:11px;line-height:1.45;color:${COLORS.muted};">
                © ${year} Digital Pin Club · <a href="${SITE_URL}" style="color:${COLORS.soft};text-decoration:none;">digitalpinclub.com</a>
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

export function renderWelcomeEmailText(name: string): string {
  const first = firstNameFrom(name);
  return [
    `Hi ${first},`,
    "",
    "You’re on the roster. Thanks for joining Digital Pin Club — an independent fan community for Disney digital pin collectors.",
    "",
    `Visit the clubhouse: ${SITE_URL}`,
    `Community: ${COMMUNITY_URL}`,
    `PinSider: ${PINSIDER_URL}`,
    "",
    "Digital Pin Club is an independent fan community. Not affiliated with, endorsed by, or sponsored by The Walt Disney Company, Disney Pinnacle, or related entities.",
  ].join("\n");
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Send welcome email via Resend. No-ops when RESEND_API_KEY is missing.
 * Never throws for API failures — caller should treat signup as already saved.
 */
export async function sendWelcomeEmail(
  input: WelcomeEmailInput,
): Promise<{ sent: boolean; id?: string; skipped?: string; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    const skipped = "RESEND_API_KEY not set — welcome email skipped";
    console.info("[welcome-email]", skipped);
    return { sent: false, skipped };
  }

  const domain = process.env.RESEND_EMAIL_DOMAIN || "pinsider.io";
  const from =
    domain === "pinsider.io" ? FROM : `Digital Pin Club <info@${domain}>`;

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send(
      {
        from,
        to: [input.email],
        subject: SUBJECT,
        html: renderWelcomeEmailHtml(input.name),
        text: renderWelcomeEmailText(input.name),
      },
      input.memberId
        ? { idempotencyKey: `welcome-email/${input.memberId}` }
        : undefined,
    );

    if (error) {
      const msg = error.message || String(error);
      console.error(
        "[welcome-email] Resend rejected send:",
        msg,
        "| from:",
        from,
        "| domain:",
        domain,
        "| hint: verify pinsider.io DNS in Resend (DKIM TXT resend._domainkey, MX+TXT on send subdomain)",
      );
      return { sent: false, error: msg };
    }

    console.info("[welcome-email] sent", data?.id);
    return { sent: true, id: data?.id };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[welcome-email] unexpected failure:", msg);
    return { sent: false, error: msg };
  }
}

export const WELCOME_EMAIL_META = {
  from: FROM,
  subject: SUBJECT,
  siteUrl: SITE_URL,
} as const;
