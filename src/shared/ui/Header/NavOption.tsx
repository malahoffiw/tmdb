import { Link, LinkProps, useMatch } from 'react-router-dom';

type NavLinkProps = {
  match: ReturnType<typeof useMatch>;
} & LinkProps;

export const NavOption = ({ children, to, match }: NavLinkProps) => (
  <Link
    to={to}
    className={`${
      match ? 'border-neutral-100 dark:border-neutral-900' : ''
    } py-2 px-6 border-b transition-colors border-pink-900 dark:border-pink-100 text-neutral-100 dark:text-neutral-900 hover:border-neutral-100 hover:dark:border-neutral-900`}
  >
    {children}
  </Link>
);
