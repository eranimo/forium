export interface IThemeConfig {
  brand: string,
}

export enum ETheme {
  LIGHT = 'light',
  DARK = 'dark',
};

export const themes: Record<ETheme, IThemeConfig> = {
  [ETheme.LIGHT]: {
    brand: '#36A4DB',
  },
  [ETheme.DARK]: {
    brand: '#36A4DB',
  },
}