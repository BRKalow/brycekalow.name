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
  <div>
    <div className="mb-6 flex flex-row items-center gap-4">
      <span className="text-2xl text-white/40">//</span>
      <WordMark className="text-xl leading-4" />
    </div>
    <div className={cn("max-w-[600px] text-xl tracking-tight")}>
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
            className="inline align-middle mt-[-2px]"
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
  </div>
);

export default Home;
