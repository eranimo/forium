import { useContext } from "react";
import { ThemeContext } from './components/Theme';

export function useTheme() {
  return useContext(ThemeContext);
}