import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 100vh;
  width: 100vw;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: column;
  padding-bottom: 4.75rem;
  @media only screen and (max-width: 768px) {
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
  }
`;

export const Content = styled.main`
  padding-left: 15rem;
  flex: 1;
  padding-right: 15rem;
  overflow: scroll;
  @media only screen and (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
