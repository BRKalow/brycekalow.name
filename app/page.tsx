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
            Engineer working on the web. Focused on creating tools and workflows that enable teams and individuals to iterate quickly.
          </p>
          <p>
            Currently working at{" "}
            <a href="https://www.clerk.com" target="_blank">
              Clerk
            </a>
            , maintaining our framework integrations and making cool things with web technologies. 🚀
          </p>
        </div>
        <SocialIcons />
      </div>
    </div>
  </div>
);

export default Home;
