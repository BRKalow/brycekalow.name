import React from "react";
import { cn } from "lib/cn";

const linkClass = cn(
  "rounded-lg border p-2 transition-[box-shadow,transform] shadow-md duration-300 hover:shadow-lg hover:-translate-y-0.5",
  "bg-white border-black/10 text-black/50 hover:text-black/75",
  "dark:border-white/10 dark:bg-black dark:text-white/50 dark:hover:text-white/75"
);

const iconClass = cn(
  "w-[16px] h-[16px] fill-current transition-fill duration-500"
);

const SocialIcons = ({ className }) => {
  return (
    <div className={cn("flex gap-3", className)}>
      <a
        className={linkClass}
        href="https://twitter.com/brkalow"
        target="_blank"
        title="Bryce Kalow Twitter"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 72 72"
          className={iconClass}
        >
          <path d="M67.812 16.141a26.246 26.246 0 0 1-7.519 2.06 13.134 13.134 0 0 0 5.756-7.244 26.127 26.127 0 0 1-8.313 3.176A13.075 13.075 0 0 0 48.182 10c-7.229 0-13.092 5.861-13.092 13.093 0 1.026.118 2.021.338 2.981-10.885-.548-20.528-5.757-26.987-13.679a13.048 13.048 0 0 0-1.771 6.581c0 4.542 2.312 8.551 5.824 10.898a13.048 13.048 0 0 1-5.93-1.638c-.002.055-.002.11-.002.162 0 6.345 4.513 11.638 10.504 12.84a13.177 13.177 0 0 1-3.449.457c-.846 0-1.667-.078-2.465-.231 1.667 5.2 6.499 8.986 12.23 9.09a26.276 26.276 0 0 1-16.26 5.606A26.21 26.21 0 0 1 4 55.976a37.036 37.036 0 0 0 20.067 5.882c24.083 0 37.251-19.949 37.251-37.249 0-.566-.014-1.134-.039-1.694a26.597 26.597 0 0 0 6.533-6.774z" />
        </svg>
      </a>
      <a
        className={linkClass}
        href="https://github.com/BRKalow"
        target="_blank"
        title="Bryce Kalow GitHub"
      >
        <svg viewBox="0 0 16 16" version="1.1" width="32" className={iconClass}>
          <path
            fillRule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
          />
        </svg>
      </a>
      <a
        className={linkClass}
        href="https://www.linkedin.com/in/bryce-kalow-86a57183/"
        target="_blank"
        title="Bryce Kalow LinkedIn"
      >
        <svg viewBox="0 0 18 18" className={iconClass}>
          <path d="M18 18h-4v-6.75c0-1.06-1.19-1.94-2.25-1.94S10 10.19 10 11.25V18H6V6h4v2c.66-1.07 2.36-1.76 3.5-1.76 2.5 0 4.5 2.04 4.5 4.51V18zM4 18H0V6h4v12zM2 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
        </svg>
      </a>
    </div>
  );
};

export default SocialIcons;
