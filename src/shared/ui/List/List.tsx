import { PropsWithChildren } from 'react';

import { Image } from 'shared/ui';

type CardProps = {
  title: string;
  imageSrc: string;
};

export const Card = ({ imageSrc, title }: CardProps) => (
  <li className="group cursor-pointer">
    <Image src={imageSrc} alt={`${title}`} />
    <p className="mt-2 text-sm sm:text-base">{title}</p>
  </li>
);

export const Vertical = ({ children }: PropsWithChildren) => (
  <ul className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-6">{children}</ul>
);

export const Horizontal = ({ children }: PropsWithChildren) => (
  <ul className="grid grid-flow-col auto-cols-[150px] gap-x-2 overflow-x-auto rounded p-2">{children}</ul>
);
