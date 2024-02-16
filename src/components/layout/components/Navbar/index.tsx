import React from "react";
import {
  CartContainer,
  CartInfoContainer,
  CartSubtitle,
  CartTitle,
  Container,
  Title,
} from "./styles";
import { ReactComponent as CartIcon } from "~/assets/svg/icons/cart-1.svg";
import { useSelector } from "react-redux";
import { ApplicationState } from "~/store/types";

const Navbar: React.FC = () => {
  const cartLength = useSelector(
    (state: ApplicationState) => state.cart.data.items.length
  );
  return (
    <Container>
      <Title>WeMovies</Title>
      <CartContainer>
        <CartInfoContainer>
          <CartTitle>Meu Carrinho</CartTitle>
          <CartSubtitle>{cartLength} itens</CartSubtitle>
        </CartInfoContainer>
        <CartIcon />
      </CartContainer>
    </Container>
  );
};

export default Navbar;
