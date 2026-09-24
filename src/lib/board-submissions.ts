import { getSql } from "@/lib/db";
import type { BoardGalleryCard } from "@/data/board-gallery";

const COLOR_CYCLE: Array<"g" | "b" | "r" | "n"> = ["g", "b", "r", "n"];
const DEFAULT_NOTE = "Member-submitted snapshot";
const GALLERY_LIMIT = 24;

const PINBOOK_PREFIXED_ID_RE =
  /pinbook-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i;
const BARE_UUID_RE =
  /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i;

/**
 * Derive Disney Pinbook OG image URL from a share/Pinbook URL.
 * Prefers pinbook-<uuid> (apache1999 / sarah_lynn9 style) → /og/pinbook/pinbook-<uuid>.
 * Falls back to a bare UUID in the path (Kirk SIMP style) → /og/pinbook/<uuid>.
 * Do not rewrite bare UUIDs to pinbook-; Disney 404s that OG form for those books.
 */
export function ogImageFromPinbookUrl(url: string): string | null {
  if (!url || typeof url !== "string") return null;
  const prefixed = url.match(PINBOOK_PREFIXED_ID_RE);
  if (prefixed) {
    const id = prefixed[0].toLowerCase();
    return `https://disneypinnacle.com/og/pinbook/${id}`;
  }
  const bare = url.match(BARE_UUID_RE);
  if (!bare) return null;
  const id = bare[0].toLowerCase();
  return `https://disneypinnacle.com/og/pinbook/${id}`;
}

function tradeFor(handle: string): string {
  const h = handle.startsWith("@") ? handle : `@${handle}`;
  return `https://disneypinnacle.com/trade?user=${encodeURIComponent(h)}`;
}

/** Deterministic decorative pin colors from collector handle. */
function pinColorsFromHandle(handle: string): Array<"g" | "b" | "r" | "n"> {
  let hash = 0;
  for (let i = 0; i < handle.length; i++) {
    hash = (hash * 31 + handle.charCodeAt(i)) >>> 0;
  }
  const colors: Array<"g" | "b" | "r" | "n"> = [];
  for (let i = 0; i < 6; i++) {
    colors.push(COLOR_CYCLE[(hash + i * 7) % COLOR_CYCLE.length]);
  }
  return colors;
}

type BoardSubmissionRow = {
  handle: string;
  pinbook_url: string;
  note: string | null;
};

/**
 * Approved Pinbook snapshots for the community board gallery.
 * On Neon/db failure returns [] so the page still renders.
 */
export async function getApprovedBoardGallery(): Promise<BoardGalleryCard[]> {
  try {
    const sql = getSql();
    const rows = (await sql`
      SELECT handle, pinbook_url, note
      FROM board_submissions
      WHERE status = 'approved'
      ORDER BY reviewed_at DESC NULLS LAST, created_at DESC
      LIMIT ${GALLERY_LIMIT}
    `) as BoardSubmissionRow[];

    return rows.map((row) => {
      const handle = row.handle.startsWith("@") ? row.handle : `@${row.handle}`;
      const note =
        typeof row.note === "string" && row.note.trim()
          ? row.note.trim()
          : DEFAULT_NOTE;
      return {
        handle,
        note,
        tradeUrl: tradeFor(handle),
        shareUrl: row.pinbook_url,
        pinColors: pinColorsFromHandle(handle),
        imageUrl: ogImageFromPinbookUrl(row.pinbook_url),
      };
    });
  } catch (err) {
    console.error("[board-gallery] approved query failed:", err);
    return [];
  }
}
