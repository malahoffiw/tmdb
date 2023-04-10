import { ComponentPropsWithoutRef } from 'react';

export const HeaderButton = ({ children, ...restProps }: ComponentPropsWithoutRef<'button'>) => {
  return (
    <button
      className="px-6 py-4 text-neutral-100 dark:text-neutral-900
        lg:border-b-2 lg:border-pink-900 lg:dark:border-pink-100 lg:hover:border-neutral-100 lg:hover:dark:border-neutral-900"
      {...restProps}
    >
      {children}
    </button>
  );
};
