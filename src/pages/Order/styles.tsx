import styled from "styled-components";
import { ReactComponent as Order } from "~/assets/svg/icons/order.svg";
import { CustomButton } from "~/components/CustomButton";

export const OrderImage = styled(Order)`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const CustomButtonRoot = styled(CustomButton.Root)`
  width: 11.25rem;
  height: 2.5rem;
  font-size: ${({ theme }) => theme.fontSize.small};
`;
