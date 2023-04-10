import { PropsWithChildren } from 'react';

export const Header = ({ children }: PropsWithChildren) => (
  <header
    className="fixed top-0 z-50 flex justify-between items-center w-full
                bg-pink-900 text-neutral-100 dark:text-neutral-900 dark:bg-pink-100
                drop-shadow-light dark:drop-shadow-dark"
  >
    {children}
  </header>
);
