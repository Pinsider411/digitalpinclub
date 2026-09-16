/**
 * Google Sheets mirror for club_members.
 *
 * Neon Postgres is the source of truth.
 * Sheets append runs only when GOOGLE_SERVICE_ACCOUNT_EMAIL + GOOGLE_PRIVATE_KEY
 * (and GOOGLE_SHEETS_ID) are set. Otherwise we skip gracefully.
 *
 * TODO: Add a Google Cloud service account with Sheets edit access on the club
 * spreadsheet, share the sheet with that SA email, and set the env vars on Vercel
 * Preview/Production. Until then, sheet_synced_at stays null.
 */

export type ClubMemberSheetRow = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  handle: string | null;
  favorite_disney_ip: string;
  favorite_pin_set: string | null;
  collector_level: string | null;
  city_or_region: string | null;
  marketing_opt_in: boolean;
  notes: string | null;
  source: string;
};

function sheetsConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_SHEETS_ID &&
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_PRIVATE_KEY,
  );
}

export async function mirrorMemberToSheet(
  row: ClubMemberSheetRow,
): Promise<{ synced: boolean; reason?: string }> {
  if (!sheetsConfigured()) {
    return {
      synced: false,
      reason:
        "Sheets mirror pending: set GOOGLE_SERVICE_ACCOUNT_EMAIL + GOOGLE_PRIVATE_KEY (Neon remains source of truth)",
    };
  }

  const spreadsheetId = process.env.GOOGLE_SHEETS_ID!;
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!;
  // Vercel env often stores newlines as \n
  const privateKey = process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n");

  try {
    const { google } = await import("googleapis");
    const auth = new google.auth.JWT({
      email,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:L",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [
          [
            row.id,
            row.created_at,
            row.name,
            row.email,
            row.handle ?? "",
            row.favorite_disney_ip,
            row.favorite_pin_set ?? "",
            row.collector_level ?? "",
            row.city_or_region ?? "",
            row.marketing_opt_in ? "yes" : "no",
            row.notes ?? "",
            row.source,
          ],
        ],
      },
    });

    return { synced: true };
  } catch (err) {
    console.error("[sheets] mirror failed (Neon row kept):", err);
    return { synced: false, reason: "Sheets append failed; Neon row kept" };
  }
}
