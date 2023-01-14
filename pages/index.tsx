import React from "react";
import Link from "next/link";
import Head from "next/head";
import SocialIcons from "../components/social-icons";
import Avatar from "../components/avatar";

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
    </div>
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

      section {
        background: white;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        text-align: left;
        display: inline-block;
      }
    `}</style>
  </div>
);

export default Home;
