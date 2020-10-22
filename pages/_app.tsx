import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import StyleProvider from '../components/style-provider';
import ThemeSwitcher from '../components/theme-switcher';
import Shapes from '../components/shapes';
import { Header } from '../components/header';

import '../styles/prism-theme.css';
import '../styles/animations.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta name="twitter:creator" content="@brkalow" />
          <meta name="twitter:site" content="@brkalow" />
        </Head>
        <main role="main">
          <StyleProvider>
            <Header />
            <div className="content">
            <Component {...pageProps} />
            </div>
          </StyleProvider>
          <Shapes />
        </main>
      </>
    );
  }
}

export default MyApp;
