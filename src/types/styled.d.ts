import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      white: string;
      grey: string;
      darkGrey: string;
      green: string;
    };
    fontSize: {
      xSmall: string;
      small: string;
      medium: string;
      large: string;
      xLarge: string;
    };
    weight: {
      bold: number;
      semiBold: number;
      regular: number;
    };
  }
}
