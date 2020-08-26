import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
import css from 'styled-jsx/css';
import { ThemeContext } from '../components/style-provider';
import SocialIcons from '../components/social-icons';

const profilePictureStyle = css.resolve`
  div {
    background: center/cover url(./profile_pic.jpeg);
    clip-path: url(#clipPath);
    width: 150px;
    height: 150px;
    transform: perspective(1000px);
  }
`;

const clamp = num => Math.round((num + 0.00001) * 100) / 100

const Home = () => {
  const t = React.useContext(ThemeContext);
  const [profileMousePosition, setProfileMousePosition] = React.useState([]);

  const handleProfilePictureMouseOver = e => {
      const rect = e.currentTarget.getBoundingClientRect();

      const middleX = rect.width / 2;
      const middleY = rect.height / 2

      setProfileMousePosition([middleX - (e.clientX - rect.left), middleY - (e.clientY - rect.top)]);
  }

  return (
    <div>
      <Head>
        <title>Bryce Kalow</title>
      </Head>
      {profilePictureStyle.styles}
      <div className="hero">
        <div className="hero-text">
          <h1>Bryce Kalow</h1>
          <div className="blurb">
            <p>
              Engineer working on the web. I am passionate about improving developer experience,
              creating maintainable and accessible applications at ✨<em>scale</em>✨, and open
              source software.
            </p>
            <p>
              Currently working on{' '}
              <a href="https://www.target.com" target="_blank">
                Target.com
              </a>
              , making cool things with ⚛React and tracking down our next performance improvement.
              🚀
            </p>
          </div>
          <SocialIcons />
        </div>
        <div className="hero-profile-picture">
          <div className="profile-picture-container">
            <motion.div
              initial={{ y: 10, opacity: 0, transformPerspective: '100px', rotateX: 0, rotateY: 0 }}
              animate={{ y: 0, opacity: 1, rotateX:  clamp(profileMousePosition[1] * .1), rotateY: clamp(profileMousePosition[0] * .1)}}
              onMouseMove={handleProfilePictureMouseOver}
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
          max-width: 1000px;
          margin: 0 auto;
          padding: 5em;
          display: grid;
          grid-template-areas: 'text picture';
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
              'text';
            grid-template-columns: 1fr;
          }
        }

        @keyframes gradient {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }

        @keyframes expand {
            from {
                width: 0;
            }

            to {
                width: 60%;
            }
        }

        h1 {
          display: inline-block;
          vertical-align: middle;
          font-size: 5em;
          margin: 0 0 0.5em 0;
          letter-spacing: -0.03em;
        }

        h1::after {
          content: '';
          background-color: #ed6f4d;
          background-size: 400% 100%;
          background-image: linear-gradient(90deg,#12c2e9,#c471ed,#f64f59);
          animation: expand 1s ease-in-out 1, gradient 3s ease infinite;
          height: 4px;
          width: 60%;
          display: block;
          margin-top: 5px;
          transition: width 1s ease;
        }

        .hero-text {
          place-self: center;
          grid-area: text;
        }

        .blurb {
          font-size: 1.5em;
          font-weight: normal;
        }

        p {
          margin: 0;
          margin-bottom: 1em;
        }

        .hero-profile-picture {
          display: grid;
          grid-area: picture;
        }

        .profile-picture-container {
          filter: drop-shadow(0 2px 3px rgba(0, 0, 0, ${t.name === 'dark' ? '0.2' : '0.1'}));
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
};

export default Home;
