// import createMiddleware from "next-intl/middleware";
// import { routing } from "./i18n/routing";

// export default createMiddleware(routing);

// export const config = {
//   matcher: ["/", "/(es|fr|en):path*"],
// };

// import createMiddleware from "next-intl/middleware";
// import { routing } from "./i18n/routing";

// export default createMiddleware({
//   locales: routing.locales,
//   defaultLocale: routing.defaultLocale,
// });

// export const config = {
//   matcher: ["/((?!api|_next|_vercel|.*\\..*).*):path*"],
// };

import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(es|en|it)/:path*"],
};

