import { ComponentPropsWithoutRef } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

type ArrowBtnProps = {
  side: 'left' | 'right';
} & ComponentPropsWithoutRef<'button'>;

export const ArrowBtn = ({ side, ...restProps }: ArrowBtnProps) => (
  <button
    className="px-4 py-2 border-t border-t-neutral-900 dark:border-t-neutral-100 hover:border-t-pink-900 hover:dark:border-t-pink-100 transition-colors"
    {...restProps}
  >
    {side === 'left' && <RiArrowLeftSLine />}
    {side === 'right' && <RiArrowRightSLine />}
  </button>
);
