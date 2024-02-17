import styled from "styled-components";
import { Button as antdButton } from "antd";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.25rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1.5rem;
`;

export const HeaderItem = styled.div`
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.colors.grey};
`;

export const HeaderItemLg = styled(HeaderItem)`
  flex: 0.5;
`;

export const HeaderItemSm = styled(HeaderItem)`
  flex: 0.25;
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 1.3125rem;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PriceTitle = styled.div`
  font-size: 0.875rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.colors.grey};
  text-transform: uppercase;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
`;

export const Price = styled.div`
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 1rem;
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

export const List = styled.div`
  overflow: scroll;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  height: 100%;
`;

export const Fixed = styled.div`
  background-color: white;
  width: 100%;
  padding-left: 1.5rem;
  padding-bottom: 1.5rem;
  padding-right: 1.5rem;
`;
