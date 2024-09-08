import clsx from "clsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export default function HomeSectionLayout({
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) {
  return (
    <section
      {...props}
      className={clsx("px-6 py-12 sm:px-10 lg:px-12", className)}
    >
      <article className="mx-auto max-w-7xl">{props.children}</article>
    </section>
  );
}
