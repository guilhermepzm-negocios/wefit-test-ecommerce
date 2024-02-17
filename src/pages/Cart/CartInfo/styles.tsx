import styled from "styled-components";
import { CustomButton } from "~/components/CustomButton";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.25rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    height: calc(100% - 1rem);
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1.5rem;
  @media only screen and (max-width: 768px) {
    display: none;
  }
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
  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
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
  @media only screen and (max-width: 768px) {
    width: 100%;
    justify-content: flex-end;
  }
`;

export const Price = styled.div`
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 1rem;
`;

export const CustomButtonRoot = styled(CustomButton.Root)`
  width: 11.25rem;
  height: 2.5rem;
  font-size: 0.875rem;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const List = styled.div`
  overflow: scroll;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  height: 100%;
  @media only screen and (max-width: 768px) {
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const Fixed = styled.div`
  background-color: white;
  width: 100%;
  padding-left: 1.5rem;
  padding-bottom: 1.5rem;
  padding-right: 1.5rem;
`;
