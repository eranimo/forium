import React, { ReactNode } from 'react';
import { themes, ETheme } from '../theme';
import { Grommet } from 'grommet';

export type ThemeProps = {
  value: ETheme,
  children: ReactNode,
};

export const ThemeContext = React.createContext(ETheme.LIGHT);

export const Theme: React.FC<ThemeProps> = ({ value, children }) => {
  return (
    <ThemeContext.Provider value={value}>
      <Grommet theme={themes[value] as any}>
        {children}
      </Grommet>
    </ThemeContext.Provider>
  )
}
Theme.defaultProps = {
  value: ETheme.LIGHT,
};