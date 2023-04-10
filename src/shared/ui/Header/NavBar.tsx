import { PropsWithChildren } from 'react';

export const NavBar = ({ children }: PropsWithChildren) => (
  <nav className="flex gap-2 px-6 text-neutral-900 dark:text-neutral-100">{children}</nav>
);
