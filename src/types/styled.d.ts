import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      white: string;
      grey: string;
      green: string;
    };
    weight: {
      bold: number;
      semiBold: number;
      regular: number;
    };
  }
}
