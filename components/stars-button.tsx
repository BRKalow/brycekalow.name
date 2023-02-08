"use client";
import { useRouter } from "next/navigation";
import React, { startTransition } from "react";
import { getHasPostBeenReactedTo, reactToPost } from "../lib/reactions";

/**
 * The particle animation was borrowed from this article: https://css-tricks.com/recreating-the-twitter-heart-animation/
 * Such a clever technique!
 */
export const StarsButton = ({ count, post }) => {
  const router = useRouter();
  const [hasLiked, setHasLiked] = React.useState(() =>
    getHasPostBeenReactedTo(post, "stars")
  );
  const [active, setActive] = React.useState(false);
  const [wiggle, setWiggle] = React.useState(false);
  const wiggleTimer = React.useRef<NodeJS.Timeout>();
  const activeTimer = React.useRef<NodeJS.Timeout>();

  React.useEffect(() => {
    if (active) {
      activeTimer.current = setTimeout(() => {
        setActive(false);
        activeTimer.current = undefined;
      }, 1000);
    }
  }, [active]);

  console.log({ hasLiked });

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
          await reactToPost(post, "stars");
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
          color: #eadb21;
          fill: currentColor;
          box-sizing: content-box;
          background-color: transparent;
          transition: background-color 0.5s, fill 0.25s, stroke 0.25s;
          margin-left: 1rem;
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
          transition: background-color 0.5s, fill 0.25s, stroke 0.25s;
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

        svg.star-icon {
          margin-bottom: -6px;
        }

        .active {
          fill: currentColor;
          stroke: transparent;
        }

        .active svg.star-icon {
          transform: scale(1);
          animation: iconPop;
          animation-duration: 1s;
        }

        .active .icon::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          background-color: transparent;
          opacity: 1;
          transform: scale(1);
          animation: sparkles;
          animation-duration: 1s;
          animation-delay: 0.2s;
          animation-timing-function: ease-out;
          width: 6px;
          height: 6px;
          margin: -3px;
          opacity: 0;
          box-shadow: 0.32476rem -2.0625rem 0 -0.20625rem #ff8080,
            -0.32476rem -1.6875rem 0 -0.20625rem #ffed80,
            1.81501rem -1.03204rem 0 -0.20625rem #ffed80,
            1.11686rem -1.30605rem 0 -0.20625rem #a4ff80,
            1.93852rem 0.77557rem 0 -0.20625rem #a4ff80,
            1.71746rem 0.05889rem 0 -0.20625rem #80ffc8,
            0.60229rem 1.99916rem 0 -0.20625rem #80ffc8,
            1.02478rem 1.37948rem 0 -0.20625rem #80c8ff,
            -1.18748rem 1.71734rem 0 -0.20625rem #80c8ff,
            -0.43958rem 1.66129rem 0 -0.20625rem #a480ff,
            -2.08305rem 0.14233rem 0 -0.20625rem #a480ff,
            -1.57293rem 0.69212rem 0 -0.20625rem #ff80ed,
            -1.41004rem -1.53985rem 0 -0.20625rem #ff80ed,
            -1.52182rem -0.79823rem 0 -0.20625rem #ff8080;
        }

        .active .icon::after {
          content: "+1";
          position: absolute;
          top: 0;
          opacity: 0;
          right: -0.5rem;
          color: var(--secondary-font-color);
          animation: plusFloat;
          animation-duration: 0.75s;
          animation-delay: 0.4s;
        }

        @keyframes sparkles {
          0%,
          20% {
            opacity: 0;
          }

          25% {
            opacity: 1;
            box-shadow: 0.32476rem -1.6875rem 0 0rem #ff8080,
              -0.32476rem -1.3125rem 0 0rem #ffed80,
              1.52182rem -0.79823rem 0 0rem #ffed80,
              0.82367rem -1.07224rem 0 0rem #a4ff80,
              1.57293rem 0.69212rem 0 0rem #a4ff80,
              1.35186rem -0.02456rem 0 0rem #80ffc8,
              0.43958rem 1.66129rem 0 0rem #80ffc8,
              0.86207rem 1.04161rem 0 0rem #80c8ff,
              -1.02478rem 1.37948rem 0 0rem #80c8ff,
              -0.27687rem 1.32343rem 0 0rem #a480ff,
              -1.71746rem 0.05889rem 0 0rem #a480ff,
              -1.20733rem 0.60868rem 0 0rem #ff80ed,
              -1.11686rem -1.30605rem 0 0rem #ff80ed,
              -1.22864rem -0.56442rem 0 0rem #ff8080;
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
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="star-icon"
          >
            <path
              fillRule="evenodd"
              d="M12.672.668a.75.75 0 00-1.345 0L8.27 6.865l-6.838.994a.75.75 0 00-.416 1.279l4.948 4.823-1.168 6.811a.75.75 0 001.088.791L12 18.347l6.117 3.216a.75.75 0 001.088-.79l-1.168-6.812 4.948-4.823a.75.75 0 00-.416-1.28l-6.838-.993L12.672.668z"
            ></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="star-icon"
          >
            <path
              fillRule="evenodd"
              d="M12 .25a.75.75 0 01.673.418l3.058 6.197 6.839.994a.75.75 0 01.415 1.279l-4.948 4.823 1.168 6.811a.75.75 0 01-1.088.791L12 18.347l-6.117 3.216a.75.75 0 01-1.088-.79l1.168-6.812-4.948-4.823a.75.75 0 01.416-1.28l6.838-.993L11.328.668A.75.75 0 0112 .25zm0 2.445L9.44 7.882a.75.75 0 01-.565.41l-5.725.832 4.143 4.038a.75.75 0 01.215.664l-.978 5.702 5.121-2.692a.75.75 0 01.698 0l5.12 2.692-.977-5.702a.75.75 0 01.215-.664l4.143-4.038-5.725-.831a.75.75 0 01-.565-.41L12 2.694z"
            ></path>
          </svg>
        )}
      </span>
      <span className="count">{count}</span>
    </button>
  );
};
