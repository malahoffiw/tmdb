import { LinkProps, useMatch, useResolvedPath } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';

import { HeaderButton, MenuList, MenuOption } from 'shared/ui';

type MenuProps = {
  onClick: () => void;
};

export const MenuBtn = ({ onClick }: MenuProps) => (
  <HeaderButton onClick={onClick}>
    <HiMenu size={18} />
  </HeaderButton>
);

export const Menu = ({ onClick }: MenuProps) => (
  <MenuList onClick={onClick}>
    <MenuLink to="/" onClick={onClick}>
      Home
    </MenuLink>
    <MenuLink to="/movies" onClick={onClick}>
      Movies
    </MenuLink>
    <MenuLink to="/people" onClick={onClick}>
      People
    </MenuLink>
    <MenuLink to="/favorite" onClick={onClick}>
      Favorite
    </MenuLink>
  </MenuList>
);

const MenuLink = ({ children, to, ...props }: LinkProps) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <MenuOption match={match} to={to} {...props}>
      {children}
    </MenuOption>
  );
};
