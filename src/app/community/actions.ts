"use server";

import { getSql } from "@/lib/db";
import { setMemberCookie } from "@/lib/member-cookie";

export type UnlockState = {
  ok: boolean;
  error?: string;
};

export type BoardSubmitState = {
  ok: boolean;
  error?: string;
};

function str(v: FormDataEntryValue | null): string {
  return typeof v === "string" ? v.trim() : "";
}

function isEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isOptionalUrl(value: string): boolean {
  if (!value) return true;
  try {
    const u = new URL(value);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

/** Lightweight returning-member unlock — email lookup only, no passwords. */
export async function unlockByEmail(
  _prev: UnlockState,
  formData: FormData,
): Promise<UnlockState> {
  const email = str(formData.get("email")).toLowerCase();

  if (!email || !isEmail(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  try {
    const sql = getSql();
    const rows = await sql`
      SELECT id::text FROM club_members WHERE lower(email) = ${email} LIMIT 1
    `;

    if (!rows[0]?.id) {
      // Generic copy to avoid easy email enumeration.
      return {
        ok: false,
        error:
          "We couldn’t unlock with that email. Join free if you’re new, or try the address you used to sign up.",
      };
    }

    await setMemberCookie(String(rows[0].id));
    return { ok: true };
  } catch (err) {
    console.error("[unlock] lookup failed:", err);
    return {
      ok: false,
      error: "Couldn’t unlock right now. Please try again shortly.",
    };
  }
}

/** Member Pinbook snapshot submission for weekly gallery refresh. */
export async function submitBoard(
  _prev: BoardSubmitState,
  formData: FormData,
): Promise<BoardSubmitState> {
  const handle = str(formData.get("handle"));
  const pinbookUrl = str(formData.get("pinbook_url"));
  const note = str(formData.get("note")) || null;

  if (!handle) {
    return { ok: false, error: "Please enter your collector handle." };
  }
  if (!pinbookUrl || !isOptionalUrl(pinbookUrl)) {
    return {
      ok: false,
      error: "Please enter a valid Pinbook share URL (https://…).",
    };
  }

  try {
    const sql = getSql();
    await sql`
      INSERT INTO board_submissions (handle, pinbook_url, note, source)
      VALUES (${handle}, ${pinbookUrl}, ${note}, ${"community-lobby"})
    `;
    return { ok: true };
  } catch (err) {
    console.error("[board-submit] insert failed:", err);
    return {
      ok: false,
      error: "Couldn’t save your submission. Please try again shortly.",
    };
  }
}
