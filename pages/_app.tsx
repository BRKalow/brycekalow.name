import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import StyleProvider from '../components/style-provider';
import { useFathomAnalytics } from '../hooks/use-fathom-analytics';
import { Header } from '../components/header';

import '../styles/prism-theme.css';
import '../styles/animations.css';

export default function App({ Component, pageProps }: AppProps) {
  useFathomAnalytics();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="twitter:creator" content="@brkalow" />
        <meta name="twitter:site" content="@brkalow" />
      </Head>
      <script type="text/javascript" dangerouslySetInnerHTML={{
        __html: `(function() {
          let theme;

          try {
            theme = localStorage.getItem('theme');
          } catch (_) {}

          if (!theme) {
            // below snippet borrowed from: https://joshwcomeau.com/gatsby/dark-mode/
            const mql = window.matchMedia('(prefers-color-scheme: dark)');
            const hasMediaQueryPreference = typeof mql.matches === 'boolean';

            if (hasMediaQueryPreference) {
              theme = mql.matches ? 'dark' : 'initial';
            }
          }

          window.__theme = theme || 'initial';
          document.body.className = window.__theme;
        })();` }} />
      <StyleProvider>
        <Header />
        <main role="main">
          <div className="content">
            <Component {...pageProps} />
          </div>
        </main>
      </StyleProvider>
    </>
  );
}
