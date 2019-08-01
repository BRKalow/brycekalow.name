import React from 'react';
import App, { Container } from 'next/app';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');

          :root {
            overflow-x: hidden;
          }

          body {
            font-family: Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
              sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
            font-size: 0.9em;
            margin: 0;
            -webkit-font-smoothing: antialiased;
            padding: 5em;
            box-sizing: border-box;
          }

          @media (max-width: 667px) {
            body {
              padding: 2em;
            }
          }

          :root,
          body,
          main,
          #__next {
            height: 100%;
          }
        `}</style>
        <main role="main">
          <Component {...pageProps} />
        </main>
      </Container>
    );
  }
}

export default MyApp;
