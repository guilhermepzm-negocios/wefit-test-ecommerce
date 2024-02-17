import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
`;

export const Content = styled.div`
  height: 100%;
  justify-content: space-around;
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
