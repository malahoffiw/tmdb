import { createContext, PropsWithChildren, useLayoutEffect, useState } from 'react';

import { Theme, ThemeCtx } from './types';

export const ThemeContext = createContext<ThemeCtx | null>(null);
export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>('light');

  useLayoutEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setTheme('dark');
    }

    setTimeout(() => {
      document.body.classList.remove('preload');
    }, 0);
  }, []);

  useLayoutEffect(() => {
    localStorage.theme = theme;
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        toggleTheme: handleThemeChange,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
