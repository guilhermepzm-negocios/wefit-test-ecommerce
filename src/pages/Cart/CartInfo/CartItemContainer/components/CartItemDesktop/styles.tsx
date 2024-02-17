import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.25rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.3125rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ContentItemLg = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 0.5;
`;

export const ContentItemSm = styled.div`
  display: flex;
  align-items: center;
  flex: 0.25;
  justify-content: space-between;
  svg {
    cursor: pointer;
  }
`;

export const Image = styled.img`
  height: 7.125rem;
  object-fit: contain;
  margin-right: 3.25rem;
`;

export const Title = styled.div`
  font-size: 0.875rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  margin-bottom: 0.5rem;
`;

export const Price = styled.div`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.weight.bold};
`;
