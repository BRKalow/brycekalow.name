"use client";

import { motion } from "framer-motion";
import { cn } from "lib/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WordMark } from "./word-mark";

export function Header() {
  const path = usePathname();
  const isBlogPost = path?.startsWith("/blog/");

  return (
    <div
      className={cn(
        "fixed bottom-4 lg:bottom-8 w-full px-8 flex z-10 justify-center"
      )}
    >
      <div className="w-full max-w-full lg:max-w-[500px] flex flex-row justify-between items-stretch rounded-full backdrop-blur-md bg-black/50 px-6 py-3 border border-white/25  shadow-md">
        <WordMark />
        <nav className="flex gap-4 items-center">
          <Link
            href="/blog"
            className="hover:underline decoration-2 underline-offset-1"
          >
            Posts
          </Link>
        </nav>
      </div>
    </div>
  );
}
