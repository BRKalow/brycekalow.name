import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
import css from 'styled-jsx/css';
import SocialIcons from '../components/social-icons';
import Dots from '../components/dots';

const profilePictureStyle = css.resolve`
  background: center/cover url(./static/profile_pic.jpeg);
  clip-path: url(#clipPath);
  width: 150px;
  height: 150px;
`;

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Dots />
    {profilePictureStyle.styles}
    <div className="hero">
      <div style={{ placeSelf: 'center', gridArea: 'blurb' }}>
        <h1>Bryce Kalow</h1>
        <div className="blurb">
          <p>
            Engineer working on the web. I am passionate about improving developer experience,
            creating maintainable and accessible applications at ✨<em>scale</em>✨, and open source
            software.
          </p>
          <p>
            Currently working on{' '}
            <a href="https://www.target.com" target="_blank">
              Target.com
            </a>
            , making cool things with ⚛React and tracking down our next performance improvement. 🚀
          </p>
        </div>
        <SocialIcons />
      </div>
      <div style={{ display: 'grid', gridArea: 'picture' }}>
        <div className="profile-picture-container">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            className={profilePictureStyle.className}
            aria-label="profile picture"
          />
        </div>
      </div>
    </div>
    <svg style={{ height: '0px' }}>
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
        max-width: 800px;
        margin: 0 auto;
        padding: 5em;
        display: grid;
        grid-template-areas: 'blurb picture';
        grid-template-columns: 3fr 2fr;
        grid-template-rows: 1fr;
        grid-column-gap: 1em;
        grid-row-gap: 2em;
      }

      @media (max-width: 667px) {
        .hero {
          padding: 2em;
          grid-template-areas:
            'picture'
            'blurb';
          grid-template-columns: 1fr;
        }
      }

      h1 {
        color: #34343e;
        display: inline-block;
        vertical-align: middle;
        font-size: 3em;
        margin: 0 0 0.5em 0;
        letter-spacing: -0.03em;
      }

      h1::after {
        content: '';
        background-color: #ed6f4d;
        background: linear-gradient(-140deg, rgba(255, 179, 158, 1) 10%, rgba(237, 111, 77, 1) 60%);
        height: 4px;
        width: 60%;
        display: block;
        margin-top: 5px;
      }

      .blurb {
        font-size: 1.5em;
        color: #757583;
        font-weight: normal;
      }

      p {
        margin: 0;
        margin-bottom: 1em;
      }

      .profile-picture-container {
        filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.1));
        vertical-align: middle;
        place-self: center;
        height: 150px;
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
