import { PropsWithChildren } from 'react';

import { IMAGE_URL } from 'shared/api';

type StickyBlockProps = {
  imageSrc: string;
  imageAlt: string;
} & PropsWithChildren;

export const SectionSticky = ({ imageSrc, imageAlt, children }: StickyBlockProps) => (
  <div className="md:sticky md:top-24 max-h-[550px]">
    <img
      className="mb-4 mx-auto max-h-[500px] rounded drop-shadow-xl"
      src={imageSrc ? `${IMAGE_URL}${imageSrc}` : ''}
      alt={`${imageAlt} poster`}
    />
    {children}
  </div>
);

export const SectionScrolling = ({ children }: PropsWithChildren) => (
  <div className="row-start-2 md:row-start-1">{children}</div>
);

export const Container = ({ children }: PropsWithChildren) => (
  <div
    className="container mx-auto grid grid-cols-1 md:grid-cols-[minmax(400px,_1fr)_minmax(240px,_300px)]
                  gap-x-12 mt-16 mb-10 px-6 text-neutral-900 dark:text-neutral-100"
  >
    {children}
  </div>
);
