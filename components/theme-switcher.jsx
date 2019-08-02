import React from 'react';
import { ThemeContext } from './style-provider';

const ThemeSwitcher = () => {
  const t = React.useContext(ThemeContext);

  return (
    <button onClick={() => (t.name === 'initial' ? t.setTheme('dark') : t.setTheme('initial'))}>
      dark
    </button>
  );
};

export default ThemeSwitcher;
