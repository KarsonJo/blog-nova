"use client";

import { usePathname } from "@/i18n-nav";
import clsx from "clsx";
import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export default function Html({
  className,
  ...props
}: DetailedHTMLProps<HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>) {
  const pathName = usePathname();

  return <html className={clsx(className, pathName === "/" ? "dark": "light")} {...props} />;
}
