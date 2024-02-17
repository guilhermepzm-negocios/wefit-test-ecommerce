import styled from "styled-components";
import { Button as antdButton } from "antd";
import { ReactComponent as EmptyCart } from "~/assets/svg/icons/empty-cart.svg";

export const Container = styled.div`
  height: 100%;
`;

export const EmptyContainer = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

export const Title = styled.div`
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.weight.bold};
`;

export const EmptyImage = styled(EmptyCart)`
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
