import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import StyledJsxRegistry from "./style-regsitry";

import "./globals.css";
import "../styles/code-block-styles.css";
import { cn } from "lib/cn";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
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
      <body
        className={cn(
          "bg-black text-white/75",
          "bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:24px_24px]"
        )}
      >
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
          document.body.classList.add(window.__theme);
        })();`,
          }}
        />
        <StyledJsxRegistry>
          <div className="wrapper">
            {/* <Header /> */}
            <main role="main" className={cn("flex flex-row")}>
              <div className="content max-w-3xl px-8 py-16 lg:px-12 lg:py-20">
                {children}
              </div>
              {/* <nav className="">Blog</nav> */}
            </main>
            {/* <Footer /> */}
          </div>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}

export const metadata = {
  title: {
    default: "Bryce Kalow",
    template: "%s | Bryce Kalow",
  },
};
