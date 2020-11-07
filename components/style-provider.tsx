import React from 'react';

interface Theme {
  color: string;
  secondaryColor: string;
  backgroundColor: string;
  headingColor: string;
  dotColor: string;
}

const themes: Record<Themes, Partial<Theme>> = {
  initial: {
    color: '#00123c',
    secondaryColor: '#3c4b6f',
    backgroundColor: '255, 255, 255',
    headingColor: '#00123c',
    dotColor: '#00123c1f'
  },
  dark: {
    color: 'white',
    secondaryColor: '#cccccc',
    backgroundColor: '7, 15, 35',
    headingColor: 'white',
    dotColor: '#ffffff0d'
  }
};

type Themes = 'initial' | 'dark';

export const ThemeContext = React.createContext<{
  theme: Partial<Theme>;
  name: Themes;
  setTheme: React.Dispatch<React.SetStateAction<Themes>>;
}>({
  theme: themes.initial,
  name: 'initial',
  setTheme: () => {}
});

const StyleProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState<Themes>('initial');
  const activeTheme = themes[theme];
  const themeContextValue = React.useMemo(
    () => ({ theme: { ...themes['initial'], ...themes[theme] }, name: theme, setTheme }),
    [theme, setTheme]
  );

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');

        :root {
          overflow-x: hidden;
          --font-color: ${activeTheme.color};
          --secondary-font-color: ${activeTheme.secondaryColor};
          --bg-color: ${activeTheme.backgroundColor};
          --dot-color: ${activeTheme.dotColor};
        }

        body {
          font-family: Segoe UI, Open Sans, -apple-system, BlinkMacSystemFont, Helvetica, Arial,
            sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
          font-size: 16px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          box-sizing: border-box;
          color: var(--font-color);
          background-color: rgb(var(--bg-color));
          word-break: break-word;
          letter-spacing: 0.2px;
          transition: color 0.3s ease-out, background-color 0.3s ease-out;
        }

        :root,
        body,
        #__next {
          height: 100%;
        }

        main {
          min-height: 100%;
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 1.5em;
        }

        .content {
          padding: 5rem;
          background-image: radial-gradient(var(--dot-color) 2px, transparent 2px), radial-gradient(var(--dot-color) 1.5px, transparent 1.5px);
          background-size: 50px 50px;
          background-position: 0 0, 25px 25px;
        }

        
        @media (max-width: 667px) {
          .content {
            padding: 2rem 0;
          }
        }

        a:link, a:visited {
          color: var(--font-color);
        }

        p, ul {
          line-height: 1.5rem;
          margin: 0;
          margin-bottom: 1.5rem;
        }

        h1, h2, h3, h4, h5, h6 {
          margin-top: 3rem;
          margin-bottom: 1rem;
        }

        h1 {
          margin-top: 0;
        }

        code {
          background-color: rgba(0,0,0,0.06);
          padding: 0.1rem 0.25rem;
          border-radius: 4px;
        }

        blockquote {
          border-left: 4px solid lightgray;
          margin-left: 0;
          padding-left: 1.5rem;
          opacity: 0.8;
          font-size: 1.1rem;
          font-style: italic;
        }
      `}</style>
      <ThemeContext.Provider value={themeContextValue}>{children}</ThemeContext.Provider>
    </>
  );
};

export default StyleProvider;
