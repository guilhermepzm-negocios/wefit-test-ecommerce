import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
    };
    weight: {
      bold: number;
      semiBold: number;
    };
  }
}
