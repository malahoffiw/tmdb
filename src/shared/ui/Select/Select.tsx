import { ComponentPropsWithoutRef } from 'react';

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  options: Option[];
} & ComponentPropsWithoutRef<'select'>;

export const Select = ({ options, ...restProps }: SelectProps) => (
  <select
    className="border-b py-2 text-sm border-b-neutral-900
    bg-neutral-100 text-neutral-900 dark:border-b-neutral-100 dark:bg-neutral-900 dark:text-neutral-100 sm:text-base"
    {...restProps}
  >
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);
