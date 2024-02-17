import { Button as antdButton } from "antd";
import styled from "styled-components";

export const DefaultCard = styled.div`
  flex: 0 0 calc(33.333333% - 1rem);
  height: 19.0625rem;
  border-radius: 0.25rem;
  background-color: white;
  padding: 0.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.img`
  height: 11.75rem;
  width: 100%;
  object-fit: contain;
  margin-bottom: 0.4575rem;
`;

export const Title = styled.div`
  font-size: 0.75rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  padding-bottom: 0.125rem;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const Subtitle = styled.div`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  padding-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

interface ButtonProps {
  $hasInCart: boolean;
}

export const Button = styled(antdButton)<ButtonProps>`
  background-color: ${(prop) =>
    prop.$hasInCart ? prop.theme.colors.green : prop.theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0.25rem;
  width: 100%;
  height: 2.5rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  font-size: 0.75rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${(prop) =>
      prop.$hasInCart
        ? prop.theme.colors.green
        : prop.theme.colors.secondary} !important;
    color: ${({ theme }) => theme.colors.white} !important;
  }
`;

export const Count = styled.span`
  font-size: 0.75rem;
  font-weight: ${({ theme }) => theme.weight.regular};
  padding-right: 0.75rem;
  padding-left: 0.2125rem;
`;
