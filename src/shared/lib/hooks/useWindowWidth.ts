import { useRef } from 'react';

export const useWindowWidth = () => {
  const windowWidth = useRef(window.innerWidth);

  const isScreenSm = windowWidth.current > 640;
  const isScreenLg = windowWidth.current > 1024;

  return {
    isScreenSm,
    isScreenLg,
  };
};
