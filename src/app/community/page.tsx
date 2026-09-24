import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { CommunityJoinWall } from "@/components/community/CommunityJoinWall";
import { CommunityLobby } from "@/components/community/CommunityLobby";
import { getApprovedBoardGallery } from "@/lib/board-submissions";
import { hasMemberCookie } from "@/lib/member-cookie";

export const metadata: Metadata = {
  title: "Community",
  description:
    "The Digital Pin Club clubhouse lobby — hangs, member-submitted board gallery, and shortcuts for members.",
};

type Props = {
  searchParams: Promise<{ view?: string }>;
};

function allowPreviewViewOverride(): boolean {
  // Preview QA + local / non-production so Tony can flip views without joining.
  const env = process.env.VERCEL_ENV;
  return env === "preview" || env === "development" || !env;
}

export default async function CommunityPage({ searchParams }: Props) {
  const params = await searchParams;
  const view = typeof params.view === "string" ? params.view.toLowerCase() : "";
  const member = await hasMemberCookie();

  let showLobby = member;
  if (allowPreviewViewOverride()) {
    if (view === "member") showLobby = true;
    if (view === "guest") showLobby = false;
  }

  const galleryCards = showLobby ? await getApprovedBoardGallery() : [];

  return (
    <Section>
      {showLobby ? (
        <CommunityLobby galleryCards={galleryCards} />
      ) : (
        <CommunityJoinWall />
      )}
    </Section>
  );
}
