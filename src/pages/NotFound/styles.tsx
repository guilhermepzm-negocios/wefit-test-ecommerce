import styled from "styled-components";
import { ReactComponent as Svg } from "~/assets/svg/icons/empty-cart.svg";
import { CustomButton } from "~/components/CustomButton";

export const Image = styled(Svg)`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const CustomButtonRoot = styled(CustomButton.Root)`
  width: 11.25rem;
  height: 2.5rem;
  font-size: ${({ theme }) => theme.fontSize.small};
`;
