import React from "react";
import SocialIcons from "../components/social-icons";
import { cn } from "lib/cn";
import Image from "next/image";
import { WordMark } from "./word-mark";

function Card({ children }) {
  return (
    <div
      className={cn(
        "rounded-xl bg-slate-950 text-card-foreground shadow-md p-4"
      )}
    >
      {children}
    </div>
  );
}

const Home = () => (
  <>
    <div className="mb-6 flex flex-row items-center gap-4">
      <span className="text-2xl text-black/40 dark:text-white/40">//</span>
      <WordMark className="text-2xl leading-5" />
    </div>
    <div className={cn("max-w-[600px] text-xl")}>
      <p className="mb-4">
        Engineer working on the web. Focused on creating tools and workflows
        that enable teams and individuals to iterate quickly.
      </p>
      <p>
        Currently working at{" "}
        <a
          href="https://www.clerk.com"
          target="_blank"
          className={cn("underline decoration-sky-500")}
        >
          <Image
            className="inline align-middle mt-[-4px] invert dark:invert-0"
            src="/img/clerk-logo-white.svg"
            alt="Clerk"
            width="64"
            height="24"
          />
        </a>
        , maintaining our framework integrations and making cool things with web
        technologies. 🚀
      </p>
      <SocialIcons className="mt-6" />
    </div>
  </>
);

export default Home;
