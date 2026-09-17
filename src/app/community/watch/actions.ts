"use server";

import { getSql } from "@/lib/db";
import { sendCreatorSubmissionEmail } from "@/lib/creator-submission-email";

export type SubmitCreatorState = {
  ok: boolean;
  error?: string;
};

function str(v: FormDataEntryValue | null): string {
  return typeof v === "string" ? v.trim() : "";
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

export async function submitCreator(
  _prev: SubmitCreatorState,
  formData: FormData,
): Promise<SubmitCreatorState> {
  const nameOrHandle = str(formData.get("name"));
  const platforms = str(formData.get("platforms"));
  const videoUrlRaw = str(formData.get("video"));
  const videoUrl = videoUrlRaw || null;
  const permissionConfirmed = formData.get("permission") === "on";

  if (!nameOrHandle) {
    return { ok: false, error: "Please enter a name or handle." };
  }
  if (!platforms) {
    return { ok: false, error: "Please list the platforms." };
  }
  if (!permissionConfirmed) {
    return {
      ok: false,
      error: "Please confirm you have permission to suggest this listing.",
    };
  }
  if (!isOptionalUrl(videoUrlRaw)) {
    return { ok: false, error: "Please enter a valid video URL (https://…)." };
  }

  try {
    const sql = getSql();
    const rows = await sql`
      INSERT INTO creator_submissions (
        name_or_handle,
        platforms,
        video_url,
        permission_confirmed,
        source
      ) VALUES (
        ${nameOrHandle},
        ${platforms},
        ${videoUrl},
        ${permissionConfirmed},
        ${"watch-follow"}
      )
      RETURNING
        id::text,
        name_or_handle,
        platforms,
        video_url,
        permission_confirmed,
        source
    `;

    const row = rows[0];
    if (!row) {
      return { ok: false, error: "Something went wrong. Please try again." };
    }

    const notify = await sendCreatorSubmissionEmail({
      id: row.id as string,
      nameOrHandle: row.name_or_handle as string,
      platforms: row.platforms as string,
      videoUrl: (row.video_url as string | null) ?? null,
      permissionConfirmed: Boolean(row.permission_confirmed),
      source: row.source as string,
    });

    if (notify.sent) {
      await sql`
        UPDATE creator_submissions
        SET email_notified_at = now()
        WHERE id = ${row.id}::uuid
      `;
    } else if (notify.error || notify.skipped) {
      console.info(
        "[submit-creator] saved; notify skipped/failed:",
        notify.error || notify.skipped,
      );
    }

    return { ok: true };
  } catch (err) {
    console.error("[submit-creator] insert failed:", err);
    return {
      ok: false,
      error: "Couldn’t save your suggestion. Please try again shortly.",
    };
  }
}
