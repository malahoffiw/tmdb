import { Link, LinkProps, useMatch } from 'react-router-dom';
import { RiArrowRightSLine } from 'react-icons/ri';
import { RxDotFilled } from 'react-icons/rx';

type MenuOptionProps = {
  match: ReturnType<typeof useMatch>;
} & LinkProps;

export const MenuOption = ({ children, to, match, ...restProps }: MenuOptionProps) => (
  <Link
    to={to}
    className="grid grid-cols-[16px_1fr_16px] gap-2 items-center border-b py-4 px-6
              border-pink-900 dark:border-pink-100 text-pink-900 dark:text-pink-100"
    {...restProps}
  >
    <div>{match && <RxDotFilled />}</div>
    <h1>{children}</h1>
    <RiArrowRightSLine />
  </Link>
);
