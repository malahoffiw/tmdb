import { PropsWithChildren } from 'react';

export const Callout = ({ children }: PropsWithChildren) => (
  <div className="flex flex-col gap-4 px-3 py-4 rounded bg-neutral-300 dark:bg-neutral-700">{children}</div>
);
