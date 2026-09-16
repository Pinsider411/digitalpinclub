"use server";

import { getSql } from "@/lib/db";
import { mirrorMemberToSheet } from "@/lib/sheets";
import { DISNEY_IPS, COLLECTOR_LEVELS } from "@/lib/join-constants";
import { sendWelcomeEmail } from "@/lib/welcome-email";

export type JoinState = {
  ok: boolean;
  error?: string;
  duplicate?: boolean;
};

function str(v: FormDataEntryValue | null): string {
  return typeof v === "string" ? v.trim() : "";
}

function isEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function joinClub(
  _prev: JoinState,
  formData: FormData,
): Promise<JoinState> {
  const name = str(formData.get("name"));
  const email = str(formData.get("email")).toLowerCase();
  const handle = str(formData.get("handle")) || null;
  const favoriteDisneyIp = str(formData.get("favorite_disney_ip"));
  const favoritePinSet = str(formData.get("favorite_pin_set")) || null;
  const collectorLevel = str(formData.get("collector_level")) || null;
  const cityOrRegion = str(formData.get("city_or_region")) || null;
  const notes = str(formData.get("notes")) || null;
  const marketingOptIn = formData.get("marketing_opt_in") === "on";

  if (!name) return { ok: false, error: "Please enter your name." };
  if (!email || !isEmail(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (!favoriteDisneyIp || !(DISNEY_IPS as readonly string[]).includes(favoriteDisneyIp)) {
    return { ok: false, error: "Please choose your favorite Disney IP." };
  }
  if (
    collectorLevel &&
    !(COLLECTOR_LEVELS as readonly string[]).includes(collectorLevel)
  ) {
    return { ok: false, error: "Please choose a valid collector level." };
  }

  try {
    const sql = getSql();
    const rows = await sql`
      INSERT INTO club_members (
        name,
        email,
        handle,
        favorite_disney_ip,
        favorite_pin_set,
        collector_level,
        city_or_region,
        marketing_opt_in,
        notes,
        source
      ) VALUES (
        ${name},
        ${email},
        ${handle},
        ${favoriteDisneyIp},
        ${favoritePinSet},
        ${collectorLevel},
        ${cityOrRegion},
        ${marketingOptIn},
        ${notes},
        ${"join-page"}
      )
      RETURNING
        id::text,
        created_at::text,
        name,
        email,
        handle,
        favorite_disney_ip,
        favorite_pin_set,
        collector_level,
        city_or_region,
        marketing_opt_in,
        notes,
        source
    `;

    const row = rows[0];
    if (!row) {
      return { ok: false, error: "Something went wrong. Please try again." };
    }

    const mirror = await mirrorMemberToSheet({
      id: row.id as string,
      created_at: row.created_at as string,
      name: row.name as string,
      email: row.email as string,
      handle: (row.handle as string | null) ?? null,
      favorite_disney_ip: row.favorite_disney_ip as string,
      favorite_pin_set: (row.favorite_pin_set as string | null) ?? null,
      collector_level: (row.collector_level as string | null) ?? null,
      city_or_region: (row.city_or_region as string | null) ?? null,
      marketing_opt_in: Boolean(row.marketing_opt_in),
      notes: (row.notes as string | null) ?? null,
      source: row.source as string,
    });

    if (mirror.synced) {
      await sql`
        UPDATE club_members
        SET sheet_synced_at = now()
        WHERE id = ${row.id}::uuid
      `;
    } else if (mirror.reason) {
      console.info("[join]", mirror.reason);
    }

    // Welcome email is best-effort — never fail signup after member is saved.
    await sendWelcomeEmail({
      name: row.name as string,
      email: row.email as string,
      memberId: row.id as string,
    });

    return { ok: true };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    // unique on lower(email)
    if (
      msg.includes("club_members_email_uidx") ||
      msg.includes("duplicate key") ||
      msg.includes("unique constraint")
    ) {
      return {
        ok: false,
        duplicate: true,
        error:
          "That email is already on the club roster. You’re in — or try a different address.",
      };
    }
    console.error("[join] insert failed:", err);
    return { ok: false, error: "Couldn’t save your signup. Please try again shortly." };
  }
}

