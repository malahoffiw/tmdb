import { PropsWithChildren } from 'react';

export const Heading = ({ children }: PropsWithChildren) => (
  <h1 className="py-3 text-pink-900 dark:text-pink-100 sm:text-xl">{children}</h1>
);
