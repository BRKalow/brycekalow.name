import { cn } from "lib/cn";
import Link from "next/link";

export function WordMark({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "text-lg leading-4 font-bold w-16 tracking-tight inline-block",
        className
      )}
    >
      Bryce &nbsp;Kalow
    </Link>
  );
}
