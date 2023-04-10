import { useState } from 'react';

export const useModal = () => {
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

  return {
    isOpen,
    isClosed,
    handleOpenModal,
    handleCloseModal,
  };
};
