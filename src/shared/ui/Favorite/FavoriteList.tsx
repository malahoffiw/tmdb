import { PropsWithChildren } from 'react';

export const FavoriteList = ({ children }: PropsWithChildren) => <ul className="flex flex-col gap-2">{children}</ul>;
