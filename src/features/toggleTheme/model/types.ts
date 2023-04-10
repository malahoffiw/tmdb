export type Theme = 'dark' | 'light';
export type ThemeCtx = {
  theme: Theme;
  toggleTheme: () => void;
};
