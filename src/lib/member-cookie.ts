import { cookies } from "next/headers";

/** HttpOnly membership cookie — set after join or email unlock. */
export const MEMBER_COOKIE = "dpc_club_member";

/** ~1 year */
export const MEMBER_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export async function hasMemberCookie(): Promise<boolean> {
  const jar = await cookies();
  const v = jar.get(MEMBER_COOKIE)?.value;
  return Boolean(v && v !== "0");
}

export async function setMemberCookie(value = "1"): Promise<void> {
  const jar = await cookies();
  const isProd =
    process.env.VERCEL_ENV === "production" ||
    process.env.NODE_ENV === "production";
  // Share apex + www in production only; keep host-only on preview/dev.
  const domain =
    process.env.VERCEL_ENV === "production" ? ".digitalpinclub.com" : undefined;

  jar.set(MEMBER_COOKIE, value, {
    httpOnly: true,
    secure: isProd,
    sameSite: "lax",
    path: "/",
    maxAge: MEMBER_COOKIE_MAX_AGE,
    ...(domain ? { domain } : {}),
  });
}
