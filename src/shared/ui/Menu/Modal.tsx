import { PropsWithChildren } from 'react';

type ModalProps = {
  isOpen: boolean;
  isClosed: boolean;
} & PropsWithChildren;

export const Modal = ({ children, isOpen, isClosed }: ModalProps) => (
  <div
    className={`fixed top-0 left-0 z-50 w-screen h-screen scale-0 bg-neutral-100 dark:bg-neutral-900  
    ${isOpen && 'scale-100 animate-slide-right'} ${isClosed && 'animate-slide-left'}`}
  >
    {children}
  </div>
);
