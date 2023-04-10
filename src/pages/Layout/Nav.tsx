import { LinkProps, useMatch, useResolvedPath } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { RiMovie2Line } from 'react-icons/ri';
import { BsPerson, BsStar } from 'react-icons/bs';

import { NavBar, NavOption } from 'shared/ui';

export const Nav = () => (
  <NavBar>
    <NavLink to="/">
      <AiOutlineHome size={18} />
    </NavLink>
    <NavLink to="/movies">
      <RiMovie2Line size={18} />
    </NavLink>
    <NavLink to="/people">
      <BsPerson size={18} />
    </NavLink>
    <NavLink to="/favorite">
      <BsStar size={18} />
    </NavLink>
  </NavBar>
);

const NavLink = ({ children, to }: LinkProps) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <NavOption match={match} to={to}>
      {children}
    </NavOption>
  );
};
