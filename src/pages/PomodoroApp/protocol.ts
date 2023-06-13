export interface Themes {
  workingTheme: Theme;
  shortRestingTheme: Theme;
  LongRestingTheme: Theme;
}

export interface Theme {
  colors: {
    primary: string;
  };
}
