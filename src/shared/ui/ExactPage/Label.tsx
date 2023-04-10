import { PropsWithChildren } from 'react';

type LabelProps = {
  text: string;
} & PropsWithChildren;

export const Label = ({ text, children }: LabelProps) => (
  <label className="flex flex-col gap-1">
    <p className="text-sm text-neutral-600 dark:text-neutral-400">{text}</p>
    {children}
  </label>
);
