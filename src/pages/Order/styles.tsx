import styled from "styled-components";
import { Button as antdButton } from "antd";
import { ReactComponent as Order } from "~/assets/svg/icons/order.svg";

export const Container = styled.div`
  height: 100%;
`;

export const Content = styled.div`
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

export const OrderImage = styled(Order)`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const Button = styled(antdButton)`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 0.25rem;
  width: 11.25rem;
  height: 2.5rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  font-size: 0.875rem;
  text-transform: uppercase;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary} !important;
    color: ${({ theme }) => theme.colors.white} !important;
  }
`;
