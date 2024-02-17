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
`;

export const Content = styled.main`
  padding-left: 15rem;
  flex: 1;
  padding-right: 15rem;
  overflow: scroll;
`;
