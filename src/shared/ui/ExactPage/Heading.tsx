import { PropsWithChildren } from 'react';

type HeadingProps = {
  title: string;
  sub: string;
} & PropsWithChildren;

export const Heading = ({ title, sub, children }: HeadingProps) => (
  <div className="flex flex-col items-start mb-4 md:flex-row md:justify-between md:items-center">
    <div>
      <h1 className="mt-4 pt-3 md:mt-0 text-pink-900 dark:text-pink-100 sm:text-xl">{title}</h1>
      <p className="my-2 text-sm">{sub}</p>
    </div>
    {children}
  </div>
);

export const Paragraph = ({ children }: PropsWithChildren) => <p className="mt-6 mb-2">{children}</p>;
