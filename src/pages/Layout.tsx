import { useRef, useState } from 'react';
import { LinkProps, Outlet, useMatch, useResolvedPath } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';

import { ToggleTheme } from 'features/toggleTheme';
import { Header, Modal, MenuList, MenuOption, HeaderButton } from 'shared/ui';
import { NavOption, NavBar } from '../shared/ui';
import { AiOutlineHome } from 'react-icons/ai';
import { BsStar, BsPerson } from 'react-icons/bs';
import { RiMovie2Line } from 'react-icons/ri';

export const Layout = () => {
  const windowWidth = useRef(window.innerWidth);
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
        {windowWidth.current > 1024 ? (
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
        ) : (
          <HeaderButton onClick={handleOpenModal}>
            <HiMenu size={18} />
          </HeaderButton>
        )}
        <ToggleTheme />
      </Header>
      {windowWidth.current <= 1024 && (
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
      )}
      <Outlet />
    </div>
  );
};

const NavLink = ({ children, to }: LinkProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <NavOption match={match} to={to}>
      {children}
    </NavOption>
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
