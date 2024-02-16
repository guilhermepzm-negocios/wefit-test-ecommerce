import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 1.5rem;
  height: 6.125rem;
  padding-left: 15.625rem;
  padding-right: 15.625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};
  /* background-color: ${({ theme }) => theme.colors.primary}; */
`;

export const Title = styled.div`
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.weight.bold};
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CartTitle = styled.div`
  font-weight: ${({ theme }) => theme.weight.semiBold};
  font-size: 0.875rem;
`;

export const CartSubtitle = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  font-weight: ${({ theme }) => theme.weight.semiBold};
  font-size: 0.75rem;
`;

export const CartInfoContainer = styled.div`
  margin-right: 0.5rem;
  text-align: right;
`;
