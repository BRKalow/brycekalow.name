import { Inter } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import StyledJsxRegistry from "./style-regsitry";

import "./globals.css";
import "../styles/code-block-styles.css";
import { cn } from "lib/cn";
import { Header } from "./header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
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
          "bg-gray-50 text-black/75 font-sans",
          "bg-[linear-gradient(to_right,#f1f1f1_1px,transparent_1px),linear-gradient(to_bottom,#f1f1f1_1px,transparent_1px)] bg-[size:48px_48px]",
          "dark:bg-black dark:text-white/75",
          "dark:bg-[linear-gradient(to_right,#0b0b0b_1px,transparent_1px),linear-gradient(to_bottom,#0b0b0b_1px,transparent_1px)] bg-[size:48px_48px]"
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

          const mql = window.matchMedia('(prefers-color-scheme: dark)');

          function setTheme(e) {
            const oldTheme = window.__theme
            const hasMediaQueryPreference = typeof e.matches === 'boolean';
            theme = e.matches ? 'dark' : 'light';

            window.__theme = theme || 'light';
            try {
              localStorage.setItem('theme', theme)
            } catch(_) {}

            document.documentElement.classList.remove(oldTheme)
            document.documentElement.classList.add(window.__theme); 
          }

          setTheme(mql); 

          mql.addEventListener('change', setTheme)
        })();`,
          }}
        />
        <StyledJsxRegistry>
          <Header />
          <div className="wrapper px-8 py-[4.5rem]">
            <main role="main" className={cn("flex flex-row")}>
              <div className="content max-w-[min(700px,_100%)] pt-8 pb-16 lg:pb-20">
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
