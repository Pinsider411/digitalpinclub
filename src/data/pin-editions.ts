/**
 * Pin edition rows for Pinsider Mint desk.
 *
 * Sourced from Neon `pin_editions` (Atlas SearchEditions sync).
 * TODO(sync): enrich `name` in scripts/sync-mint-supplies.mjs — many rows
 * currently store asset labels (e.g. Set_Franchise_Pincard_Logo) instead of
 * collector-facing design titles.
 */

import { unstable_cache } from "next/cache";

export type PinEdition = {
  editionId: number;
  numMinted: number;
  maxMintSize: number | null;
  effectiveSupply: number | null;
  name: string | null;
  parallel: string | null;
  editionType: string | null;
  updatedAt: string;
};

/** Asset-filename / template labels that are not useful display names. */
const ASSET_NAME_RE =
  /^(Set_|Front_|Back_|Video_|Header_|Idle_|Pincard_)/i;

export function looksLikeAssetLabel(name: string | null | undefined): boolean {
  if (!name || !name.trim()) return true;
  if (name.includes("_")) return true;
  if (ASSET_NAME_RE.test(name)) return true;
  return false;
}

/** Best-effort display title — never invents collector titles. */
export function displayEditionTitle(edition: {
  editionId: number;
  name: string | null;
  parallel: string | null;
}): string {
  if (!looksLikeAssetLabel(edition.name)) {
    return edition.name!.trim();
  }
  return `Design #${edition.editionId}`;
}

async function loadPinEditionsFromNeon(): Promise<PinEdition[] | null> {
  if (!process.env.DATABASE_URL) return null;
  try {
    const { getSql } = await import("@/lib/db");
    const sql = getSql();
    const rows = await sql`
      SELECT
        edition_id,
        num_minted,
        max_mint_size,
        effective_supply,
        name,
        parallel,
        edition_type,
        updated_at
      FROM pin_editions
      ORDER BY num_minted DESC NULLS LAST, edition_id ASC
    `;
    return rows.map((row) => {
      const editionId = Number(row.edition_id);
      const numMinted = Number(row.num_minted);
      const maxMintSize =
        row.max_mint_size != null ? Number(row.max_mint_size) : null;
      const effectiveSupply =
        row.effective_supply != null ? Number(row.effective_supply) : null;
      return {
        editionId,
        numMinted: Number.isFinite(numMinted) ? numMinted : 0,
        maxMintSize: Number.isFinite(maxMintSize) ? maxMintSize : null,
        effectiveSupply: Number.isFinite(effectiveSupply)
          ? effectiveSupply
          : null,
        name: (row.name as string | null) ?? null,
        parallel: (row.parallel as string | null) ?? null,
        editionType: (row.edition_type as string | null) ?? null,
        updatedAt: row.updated_at
          ? new Date(row.updated_at as string | Date).toISOString()
          : new Date(0).toISOString(),
      };
    });
  } catch (err) {
    console.error("[pin-editions] Neon read failed", err);
    return null;
  }
}

const getCachedPinEditions = unstable_cache(
  async () => (await loadPinEditionsFromNeon()) ?? [],
  ["pin-editions-live-v1"],
  { revalidate: 300 }
);

/** All pin editions (Neon, 300s revalidate). Empty array if unavailable. */
export async function getPinEditions(): Promise<PinEdition[]> {
  return getCachedPinEditions();
}
