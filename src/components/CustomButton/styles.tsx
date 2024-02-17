import { Button } from "antd";
import styled from "styled-components";

export const CustomButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0.25rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  font-size: 0.75rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary} !important;

    color: ${({ theme }) => theme.colors.white} !important;
  }
`;

export const Count = styled.span`
  font-size: 0.75rem;
  font-weight: ${({ theme }) => theme.weight.regular};
  padding-right: 0.75rem;
  padding-left: 0.2125rem;
`;
