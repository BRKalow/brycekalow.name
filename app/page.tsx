import React from "react";
import Link from "next/link";
import SocialIcons from "../components/social-icons";
import s from "./home.module.css";

const Home = () => (
  <div>
    <div className={s.hero}>
      <div className={s["hero-text"]}>
        <div className={s.blurb}>
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
            <a href="https://www.clerk.com" target="_blank">
              Clerk
            </a>
            , making cool things with ⚛&nbsp;React and improving our web
            platform. 🚀
          </p>
        </div>
        <SocialIcons />
      </div>
    </div>
  </div>
);

export default Home;
