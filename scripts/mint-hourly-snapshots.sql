-- Mint desk hourly snapshots (Digital Pin Club)
-- Applied to Neon project digitalpinclub (frosty-hall-00319712).
-- Written by scripts/sync-mint-supplies.mjs after each mint_totals upsert.
-- Seeded once from mint_totals on first deploy.

CREATE TABLE IF NOT EXISTS mint_hourly_snapshots (
  hour_start timestamptz PRIMARY KEY, -- truncated to America/Los_Angeles hour
  estimated_total_minted bigint NOT NULL,
  edition_count integer NOT NULL,
  recorded_at timestamptz NOT NULL DEFAULT now()
);

-- Optional one-time seed from current totals:
-- INSERT INTO mint_hourly_snapshots (hour_start, estimated_total_minted, edition_count, recorded_at)
-- SELECT
--   date_trunc('hour', updated_at AT TIME ZONE 'America/Los_Angeles')
--     AT TIME ZONE 'America/Los_Angeles',
--   estimated_total_minted,
--   edition_count,
--   updated_at
-- FROM mint_totals
-- WHERE id = 1
-- ON CONFLICT (hour_start) DO NOTHING;
