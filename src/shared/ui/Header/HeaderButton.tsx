import { ComponentPropsWithoutRef } from 'react';

export const HeaderButton = ({ children, ...restProps }: ComponentPropsWithoutRef<'button'>) => {
  return (
    <button className="px-6 py-4 text-neutral-100 dark:text-neutral-900" {...restProps}>
      {children}
    </button>
  );
};
