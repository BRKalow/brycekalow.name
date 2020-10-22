import React from 'react';

interface Theme {
  color: string;
  backgroundColor: string;
  headingColor: string;
}

const themes: Record<Themes, Partial<Theme>> = {
  initial: {
    color: '#00123c',
    backgroundColor: '#ffffff',
    headingColor: '#34343e'
  },
  dark: {
    color: 'white',
    backgroundColor: '#292932',
    headingColor: 'white'
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
        }

        body {
          font-family: Segoe UI, Open Sans, -apple-system, BlinkMacSystemFont, Helvetica, Arial,
            sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
          font-size: 16px;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          box-sizing: border-box;
          color: ${activeTheme.color};
          background-color: ${activeTheme.backgroundColor};
          transition: color 0.5s ease-out, background-color 0.5s ease-out;
          word-break: break-word;
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
        }

        
        @media (max-width: 667px) {
          .content {
            padding: 2rem 0;
          }
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
