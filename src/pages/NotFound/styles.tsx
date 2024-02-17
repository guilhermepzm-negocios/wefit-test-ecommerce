import styled from "styled-components";
import { ReactComponent as Svg } from "~/assets/svg/icons/empty-cart.svg";
import { CustomButton } from "~/components/CustomButton";

export const Container = styled.div`
  height: 100%;
`;

export const Content = styled.div`
  height: 100%;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.25rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.weight.bold};
`;

export const Image = styled(Svg)`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const CustomButtonRoot = styled(CustomButton.Root)`
  width: 11.25rem;
  height: 2.5rem;
  font-size: 0.875rem;
`;
