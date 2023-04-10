import { PropsWithChildren } from 'react';

export const Paginator = ({ children }: PropsWithChildren) => (
  <div className="grid grid-cols-[46px_1fr_46px] text-sm sm:text-base">{children}</div>
);
