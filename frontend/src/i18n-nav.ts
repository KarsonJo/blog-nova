import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const localesDict = {
  "zh-cn": "简体中文",
  en: "English",
  "zh-hk": "繁体中文",
  de: "Deutsch",
  es: "Español",
  fr: "Français",
  ja: "日本語",
  ko: "한국어",
  ru: "Русский",
} as const;

export const locales = Object.keys(localesDict);

const { Link, permanentRedirect, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });

export { Link, permanentRedirect, redirect, usePathname, useRouter };
