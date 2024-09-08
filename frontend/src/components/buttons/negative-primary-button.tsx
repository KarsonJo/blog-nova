import clsx from "clsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export function NegativePrimaryButtonSpan({
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>) {
  return (
    <span
      {...props}
      className={clsx(
        "inline-block rounded-sm border border-primary-fg bg-primary-fg font-semibold uppercase text-primary shadow transition-colors hover:border-zinc-900 hover:bg-transparent hover:text-zinc-900 active:border-primary-fg active:bg-primary active:text-primary-fg",
        className,
      )}
    />
  );
}
