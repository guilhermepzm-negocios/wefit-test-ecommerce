import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
`;

export const Content = styled.div`
  text-align: center;
  height: 100%;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.25rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 768px) {
    height: calc(100% - 1rem);
  }
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.weight.bold};
  @media only screen and (max-width: 768px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }
`;
