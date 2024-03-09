import createMiddleware from "next-intl/middleware";
import { auth } from "@/auth";
import { NextRequest } from "next/server";

const locales = ["en", "de"];
const publicPages = ["/", "/login"];
const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: "en",
});

const authMiddleware = auth((req) => {
  // private routes here
  const session = req.auth;
  const { nextUrl } = req;

  if (session) {
    return intlMiddleware(req);
  } else {
    // return Response.redirect(new URL("/login", nextUrl));
    return Response.redirect(new URL("/api/auth/signin", nextUrl));
  }
});
export default function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${publicPages
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i"
  );
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicPage) {
    return intlMiddleware(req);
  } else {
    return (authMiddleware as any)(req);
  }
}
export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
