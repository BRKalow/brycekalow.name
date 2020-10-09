import React from 'react';
import App, { Container } from 'next/app';
import StyleProvider from '../components/style-provider';
import ThemeSwitcher from '../components/theme-switcher';
import Shapes from '../components/shapes';

import '../styles/prism-theme.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
        <main role="main">
          <StyleProvider>
            <Component {...pageProps} />
          </StyleProvider>
          <Shapes />
        </main>
    );
  }
}

export default MyApp;
