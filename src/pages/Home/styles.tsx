import Loader from "~/assets/img/icons/Loader.png";
import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
`;

export const SpinContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
`;

export const LoadingIndicator = styled.img.attrs({
  src: Loader,
})`
  width: 5.1875rem;
  height: 5.1875rem;
  animation: rotation 1.5s infinite linear;
  pointer-events: none;
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
`;
