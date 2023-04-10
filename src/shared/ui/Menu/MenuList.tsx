import { PropsWithChildren } from 'react';

type MenuListProps = {
  onClick: () => void;
} & PropsWithChildren;

export const MenuList = ({ children, onClick }: MenuListProps) => (
  <div onClick={onClick} className="flex flex-col w-full h-full py-20">
    {children}
  </div>
);
