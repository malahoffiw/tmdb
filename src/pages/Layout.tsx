import { useState } from 'react';
import { LinkProps, Outlet, useMatch, useResolvedPath } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';

import { ToggleTheme } from 'features/toggleTheme';
import { Header, Modal, MenuList, MenuOption, HeaderButton } from 'shared/ui';

export const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
    setIsClosed(false);
  };

  const handleCloseModal = () => {
    setIsClosed(true);
    setIsOpen(false);
  };

  return (
    <div>
      <Header>
        <HeaderButton onClick={handleOpenModal}>
          <HiMenu />
        </HeaderButton>
        <ToggleTheme />
      </Header>
      <Modal isOpen={isOpen} isClosed={isClosed}>
        <MenuList onClick={handleCloseModal}>
          <MenuLink to="/" onClick={handleCloseModal}>
            Home
          </MenuLink>
          <MenuLink to="/movies" onClick={handleCloseModal}>
            Movies
          </MenuLink>
          <MenuLink to="/people" onClick={handleCloseModal}>
            People
          </MenuLink>
          <MenuLink to="/favorite" onClick={handleCloseModal}>
            Favorite
          </MenuLink>
        </MenuList>
      </Modal>
      <Outlet />
    </div>
  );
};

const MenuLink = ({ children, to, ...props }: LinkProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <MenuOption match={match} to={to} {...props}>
      {children}
    </MenuOption>
  );
};
