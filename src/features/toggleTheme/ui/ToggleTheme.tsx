import { useContext } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

import { ThemeContext } from 'features/toggleTheme';
import { HeaderButton } from 'shared/ui';

export const ToggleTheme = () => {
  const ctx = useContext(ThemeContext);

  return (
    <HeaderButton onClick={ctx?.toggleTheme}>
      {ctx?.theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
    </HeaderButton>
  );
};
