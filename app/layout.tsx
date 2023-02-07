import Footer from "../components/footer";
import { Header } from "../components/header";
import StyleProvider from "../components/style-provider";
import StyledJsxRegistry from "./style-regsitry";

import "../styles/code-block-styles.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Bryce Kalow</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="twitter:creator" content="@brkalow" />
        <meta name="twitter:site" content="@brkalow" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Bryce Kalow"
          href="https://brycekalow.name/feed.xml"
        ></link>
      </head>
      <body>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
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
        })();`,
          }}
        />
        <StyledJsxRegistry>
          <StyleProvider>
            <div className="wrapper">
              <Header />
              <main role="main">
                <div className="content">{children}</div>
              </main>
              <Footer />
            </div>
          </StyleProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}

export const metadata = {
  title: {
    template: "%s | Bryce Kalow",
  },
};
