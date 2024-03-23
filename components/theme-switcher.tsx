"use client";

import React from "react";
import { ToggleSwitch } from "./toggle-switch";

const SunIcon = () => (
  <>
    <style jsx>{`
      svg {
        vertical-align: middle;
        margin-right: 0.25rem;
        fill: var(--font-color);
      }
    `}</style>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="16"
      height="16"
    >
      <path
        fillRule="evenodd"
        d="M8 10.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM8 12a4 4 0 100-8 4 4 0 000 8zM8 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V.75A.75.75 0 018 0zm0 13a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 018 13zM2.343 2.343a.75.75 0 011.061 0l1.06 1.061a.75.75 0 01-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06zm9.193 9.193a.75.75 0 011.06 0l1.061 1.06a.75.75 0 01-1.06 1.061l-1.061-1.06a.75.75 0 010-1.061zM16 8a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0116 8zM3 8a.75.75 0 01-.75.75H.75a.75.75 0 010-1.5h1.5A.75.75 0 013 8zm10.657-5.657a.75.75 0 010 1.061l-1.061 1.06a.75.75 0 11-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm-9.193 9.193a.75.75 0 010 1.06l-1.06 1.061a.75.75 0 11-1.061-1.06l1.06-1.061a.75.75 0 011.061 0z"
      ></path>
    </svg>
  </>
);

const MoonIcon = () => (
  <>
    <style jsx>{`
      svg {
        vertical-align: middle;
        margin-left: 0.25rem;
        fill: var(--font-color);
      }
    `}</style>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="16"
      height="16"
    >
      <path
        fillRule="evenodd"
        d="M9.598 1.591a.75.75 0 01.785-.175 7 7 0 11-8.967 8.967.75.75 0 01.961-.96 5.5 5.5 0 007.046-7.046.75.75 0 01.175-.786zm1.616 1.945a7 7 0 01-7.678 7.678 5.5 5.5 0 107.678-7.678z"
      ></path>
    </svg>
  </>
);

export const ThemeSwitcher = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={className} style={style}>
      <style jsx>{`
        div {
          transition: opacity ease-in 0.3s;
          ${isMounted
            ? `opacity: 1;
          visibility: visible;
          `
            : `opacity: 0;
          visiblity: hidden;
          `}
        }
      `}</style>
      <SunIcon />
      {isMounted ? <ToggleSwitch checked label="dark mode" /> : null}
      <MoonIcon />
    </div>
  );
};

export default ThemeSwitcher;
