"use client";
import { useRouter } from "next/navigation";
import React, {
  startTransition,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { getHasPostBeenReactedTo, reactToPost } from "../lib/reactions";

const useSafeLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

export const HeartsButton = ({ count, post }) => {
  const router = useRouter();
  const [hasLiked, setHasLiked] = useState(false);
  const [active, setActive] = useState(false);
  const [wiggle, setWiggle] = useState(false);
  const wiggleTimer = useRef<NodeJS.Timeout>();
  const activeTimer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (active) {
      activeTimer.current = setTimeout(() => {
        setActive(false);
        activeTimer.current = undefined;
      }, 1000);
    }
  }, [active]);

  useSafeLayoutEffect(() => {
    setHasLiked(getHasPostBeenReactedTo(post, "hearts") ?? false);
  }, []);

  return (
    <button
      onMouseEnter={() => {
        if (active) return;
        setWiggle(true);
        if (wiggleTimer.current) clearTimeout(wiggleTimer.current);
        wiggleTimer.current = setTimeout(() => setWiggle(false), 500);
      }}
      onClick={async () => {
        if (!hasLiked) setHasLiked(true);
        if (!activeTimer.current) {
          setActive(true);
          await reactToPost(post, "hearts");
          startTransition(() => {
            router.refresh();
          });
        }
      }}
      className={`${active ? "active" : ""} ${wiggle ? "wiggle" : ""}`}
    >
      <style jsx>{`
        button {
          border: none;
          background: none;
          padding: 0;
          cursor: pointer;
          border-radius: 50%;
          stroke-width: 2px;
          color: #ea2162;
          fill: currentColor;
          box-sizing: content-box;
          background-color: transparent;
          transition: background-color 0.5s, fill 0.25s, stroke 0.25s;
        }

        button {
          outline: 0;
        }

        .icon {
          border: none;
          background: none;
          padding: 0;
          border-radius: 50%;
          stroke-width: 2px;
          position: relative;
          height: 24px;
          width: 24px;
          padding: 6px;
          display: inline-block;
          box-sizing: content-box;
          background-color: transparent;
          transition: transform 0.25s;
          vertical-align: middle;
        }

        .count {
          color: var(--secondary-font-color);
          margin-left: 0.5rem;
          vertical-align: middle;
          font-weight: bold;
        }

        button.wiggle:not(.active) .icon {
          animation: wiggle;
          animation-duration: 0.5s;
          animation-timing-function: ease-in-out;
        }

        svg.heart-icon {
          margin-bottom: -6px;
        }

        .active svg.heart-icon {
          transform: scale(1);
          animation: iconPop;
          animation-duration: 1s;
        }

        .active .icon::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          background-color: transparent;
          opacity: 1;
          transform: scale(1);
          animation: ringPopOut;
          animation-duration: 1s;
        }

        .active .icon::after {
          content: "+1";
          position: absolute;
          top: 0;
          right: -0.5rem;
          color: var(--secondary-font-color);
          opacity: 0;
          animation: plusFloat;
          animation-duration: 0.75s;
          animation-delay: 0.4s;
        }

        @keyframes ringPopOut {
          0% {
            transform: scale(0);
            box-shadow: inset 0 0 0 20px currentColor;
          }

          10% {
            transform: scale(0);
            opacity: 1;
          }

          20% {
            transform: scale(1);
            box-shadow: inset 0 0 0 20px currentColor;
          }

          25% {
            box-shadow: inset 0 0 0 12px currentColor;
            opacity: 1;
          }

          40% {
            box-shadow: inset 0 0 0 0 currentColor;
          }

          100% {
            transform: scale(2);
            box-shadow: inset 0 0 0 1px currentColor;
            background-color: transparent;
            opacity: 0;
          }
        }

        @keyframes iconPop {
          0% {
            transform: scale(1);
          }

          10%,
          25% {
            transform: scale(0);
          }

          40% {
            transform: scale(1.3);
          }

          60% {
            transform: scale(0.8);
          }

          80% {
            transform: scale(1.1);
          }

          100% {
            transform: scale(1);
          }
        }

        @keyframes wiggle {
          0% {
            transform: rotate(0deg);
          }

          33% {
            transform: rotate(15deg);
          }

          67% {
            transform: rotate(-15deg);
          }

          100% {
            transform: rotate(0deg);
          }
        }

        @keyframes plusFloat {
          0% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translateY(-1rem);
          }
        }
      `}</style>
      <span className="icon">
        {hasLiked ? (
          <svg
            className="heart-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M14 20.408c-.492.308-.903.546-1.192.709-.153.086-.308.17-.463.252h-.002a.75.75 0 01-.686 0 16.709 16.709 0 01-.465-.252 31.147 31.147 0 01-4.803-3.34C3.8 15.572 1 12.331 1 8.513 1 5.052 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262A31.146 31.146 0 0114 20.408z"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="heart-icon"
          >
            <path
              fillRule="evenodd"
              d="M6.736 4C4.657 4 2.5 5.88 2.5 8.514c0 3.107 2.324 5.96 4.861 8.12a29.66 29.66 0 004.566 3.175l.073.041.073-.04c.271-.153.661-.38 1.13-.674.94-.588 2.19-1.441 3.436-2.502 2.537-2.16 4.861-5.013 4.861-8.12C21.5 5.88 19.343 4 17.264 4c-2.106 0-3.801 1.389-4.553 3.643a.75.75 0 01-1.422 0C10.537 5.389 8.841 4 6.736 4zM12 20.703l.343.667a.75.75 0 01-.686 0l.343-.667zM1 8.513C1 5.053 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262a31.146 31.146 0 01-5.233 3.576l-.025.013-.007.003-.002.001-.344-.666-.343.667-.003-.002-.007-.003-.025-.013A29.308 29.308 0 0110 20.408a31.147 31.147 0 01-3.611-2.632C3.8 15.573 1 12.332 1 8.514z"
            ></path>
          </svg>
        )}
      </span>
      <span className="count">{count}</span>
    </button>
  );
};
