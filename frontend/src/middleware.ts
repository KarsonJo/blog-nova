import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n-nav";

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: locales[0],
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.[^/]+$|assets|sw.js).*)"],
};
