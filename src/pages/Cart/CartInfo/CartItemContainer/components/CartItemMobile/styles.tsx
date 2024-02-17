import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.25rem;
  margin-bottom: 1.3125rem;
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1.125rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  svg {
    cursor: pointer;
  }
  gap: 1rem;
`;

export const PriceTitle = styled.div`
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.colors.grey};
`;

export const Image = styled.img`
  height: 5.125rem;
  object-fit: contain;
  margin-right: 1rem;
`;

export const Title = styled.div`
  font-size: 0.875rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  flex: 1;
`;

export const Price = styled.div`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.weight.bold};
`;
