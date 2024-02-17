import styled from "styled-components";
import { ReactComponent as EmptyCart } from "~/assets/svg/icons/empty-cart.svg";
import { CustomButton } from "~/components/CustomButton";

export const EmptyImage = styled(EmptyCart)`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const CustomButtonRoot = styled(CustomButton.Root)`
  width: 11.25rem;
  height: 2.5rem;
  font-size: 0.875rem;
`;
