-- Featured collector Pinbook rotation (additive, backward-compatible).
-- Applied to Neon project frosty-hall-00319712 on 2026-09-26.
ALTER TABLE board_submissions ADD COLUMN IF NOT EXISTS featured_at timestamptz NULL;
CREATE INDEX IF NOT EXISTS board_submissions_featured_at_idx
  ON board_submissions (featured_at DESC NULLS LAST);
