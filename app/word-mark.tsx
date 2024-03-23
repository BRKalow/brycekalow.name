import { cn } from "lib/cn";
import Link from "next/link";

export function WordMark({
  className,
  short,
}: {
  className?: string;
  short?: boolean;
}) {
  const text = short ? "brk" : "bryce kalow";
  return (
    <Link
      href="/"
      className={cn(
        "text-lg leading-4 font-semibold tracking-tight inline-block",
        className
      )}
    >
      {text}
    </Link>
  );
}
