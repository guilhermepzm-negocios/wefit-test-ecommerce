import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 4.625rem;
  padding-left: 15.625rem;
  padding-right: 15.625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`;

export const Title = styled.div`
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.weight.bold};
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const CartTitle = styled.div`
  font-weight: ${({ theme }) => theme.weight.semiBold};
`;
export const CartSubtitle = styled.div`
  color: #999;
  font-weight: ${({ theme }) => theme.weight.semiBold};
`;
