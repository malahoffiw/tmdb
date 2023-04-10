import { PropsWithChildren } from 'react';

export const Auto = ({ children }: PropsWithChildren) => (
  <div className="container mx-auto mt-16 px-6 text-neutral-900 dark:text-neutral-100">{children}</div>
);

export const Full = ({ children }: PropsWithChildren) => (
  <div className="flex flex-col gap-4 mt-16 mb-6 px-6 text-neutral-900 dark:text-neutral-100">{children}</div>
);

export const Header = ({ children }: PropsWithChildren) => (
  <div className="flex justify-between items-center gap-10">{children}</div>
);
