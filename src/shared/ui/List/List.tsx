import { PropsWithChildren } from 'react';

export const VerticalList = ({ children }: PropsWithChildren) => (
  <ul className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-6">{children}</ul>
);
export const HorizontalList = ({ children }: PropsWithChildren) => (
  <ul className="grid grid-flow-col auto-cols-[150px] gap-x-2 overflow-x-auto rounded p-2">{children}</ul>
);
