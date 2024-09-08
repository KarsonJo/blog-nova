import clsx from "clsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type IProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export default function SectionHeading({ className, ...props }: IProps) {
  return (
    <h1
      className={clsx(
        "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",
        className,
      )}
      {...props}
    />
  );
}
