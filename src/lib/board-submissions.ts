import { getSql } from "@/lib/db";
import type { BoardGalleryCard } from "@/data/board-gallery";

const COLOR_CYCLE: Array<"g" | "b" | "r" | "n"> = ["g", "b", "r", "n"];
const DEFAULT_NOTE = "Member-submitted snapshot";
const GALLERY_LIMIT = 24;

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
      };
    });
  } catch (err) {
    console.error("[board-gallery] approved query failed:", err);
    return [];
  }
}
