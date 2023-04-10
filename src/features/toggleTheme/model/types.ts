export type Theme = 'dark' | 'light';
export interface ThemeCtx {
  theme: Theme;
  toggleTheme: () => void;
}
