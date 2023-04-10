import { Outlet } from 'react-router-dom';

import { Nav } from './Nav';
import { Menu, MenuBtn } from './Menu';
import { ToggleTheme } from 'features';
import { useModal, useWindowWidth } from 'shared/lib';
import { Header, Modal } from 'shared/ui';

export const Layout = () => {
  const { isScreenLg } = useWindowWidth();
  const { isOpen, isClosed, handleOpenModal, handleCloseModal } = useModal();

  return (
    <div>
      <Header>
        {isScreenLg ? <Nav /> : <MenuBtn onClick={handleOpenModal} />}
        <ToggleTheme />
      </Header>
      {!isScreenLg && (
        <Modal isOpen={isOpen} isClosed={isClosed}>
          <Menu onClick={handleCloseModal} />
        </Modal>
      )}
      <Outlet />
    </div>
  );
};
