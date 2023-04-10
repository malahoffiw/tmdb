import { ComponentPropsWithoutRef } from 'react';
import { FiSearch } from 'react-icons/fi';

export const Search = ({ ...props }: ComponentPropsWithoutRef<'input'>) => (
  <label
    className="grid grid-cols-[minmax(80px,_200px)_16px] items-center
                    px-3 py-1 rounded bg-neutral-300 dark:bg-neutral-700"
  >
    <input
      type="text"
      className="outline-none px-2 py-1 text-sm text-neutral-900 bg-neutral-300
                  dark:bg-neutral-700 dark:text-neutral-100 sm:text-base"
      {...props}
    />
    <FiSearch />
  </label>
);
