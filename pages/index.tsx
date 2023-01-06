import React from "react";
import Link from "next/link";
import Head from "next/head";
import SocialIcons from "../components/social-icons";

const Home = () => (
  <div>
    <Head>
      <title>Bryce Kalow</title>
    </Head>
    <div className="hero">
      <div className="hero-text">
        <div className="blurb">
          <p>
            Engineer working on the web. I am{" "}
            <Link href="/blog/on-creating-a-positive-developer-experience">
              passionate about improving developer experience
            </Link>
            , creating maintainable and accessible applications at ✨
            <em>scale</em>✨, and open source software.
          </p>
          <p>
            Currently working at{" "}
            <a href="https://www.hashicorp.com" target="_blank">
              HashiCorp
            </a>
            , making cool things with ⚛&nbsp;React and improving our web
            platform. 🚀
          </p>
        </div>
        <SocialIcons />
      </div>
      <div className="hero-profile-picture">
        <div className="profile-picture-container">
          <div className="profile-picture" aria-label="profile picture" />
        </div>
      </div>
    </div>
    <svg style={{ height: "0px" }}>
      <defs>
        <clipPath id="clipPath">
          <path
            stroke="none"
            fill="white"
            d="M72 0.94337567297408a5 5 0 0 1 5 0l59.951905283833 34.613248654052a5 5 0 0 1 2.5 4.3301270189222l0 69.226497308104a5 5 0 0 1 -2.5 4.3301270189222l-59.951905283833 34.613248654052a5 5 0 0 1 -5 0l-59.951905283833 -34.613248654052a5 5 0 0 1 -2.5 -4.3301270189222l1.1025426070929e-13 -69.226497308104a5 5 0 0 1 2.5 -4.3301270189222"
          />
        </clipPath>
      </defs>
    </svg>
    <style jsx>{`
      .hero {
        max-width: 1000px;
        margin: 0 auto;
        display: grid;
        grid-template-areas: "text picture";
        grid-template-columns: 3fr 2fr;
        grid-template-rows: 1fr;
        grid-column-gap: 1em;
        grid-row-gap: 2em;
      }

      @media (max-width: 667px) {
        .hero {
          padding: 0 0 1rem;
          grid-template-areas:
            "picture"
            "text";
          grid-template-columns: 1fr;
        }
      }

      .hero-text {
        place-self: center;
        grid-area: text;
      }

      .blurb {
        font-size: 1.25em;
        font-weight: normal;
      }

      p {
        line-height: 1.5;
        margin: 0;
        margin-bottom: 1em;
      }

      .hero-profile-picture {
        display: grid;
        grid-auto-flow: row;
        grid-area: picture;
      }

      .profile-picture-container {
        filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.2));
        vertical-align: middle;
        justify-self: end;
        align-self: center;
        height: 150px;
      }

      .profile-picture {
        background: center/cover url(./profile_pic.jpeg);
        clip-path: url(#clipPath);
        width: 150px;
        height: 150px;
        transform: translateY(0);
        opacity: 1;
        animation: popIn 0.5s ease-in-out;
      }

      @media (max-width: 667px) {
        .profile-picture-container {
          justify-self: center;
        }
      }

      section {
        background: white;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        text-align: left;
        display: inline-block;
      }

      @keyframes popIn {
        0% {
          opacity: 0;
          transform: translateY(10px);
        }
      }
    `}</style>
  </div>
);

export default Home;
