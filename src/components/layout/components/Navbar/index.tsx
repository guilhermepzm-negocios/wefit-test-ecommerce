import React from "react";
import {
  CartContainer,
  CartSubtitle,
  CartTitle,
  Container,
  Title,
} from "./styles";
import { ReactComponent as CartIcon } from "~/assets/svg/icons/cart-1.svg";

const Navbar: React.FC = () => {
  return (
    <Container>
      <Title>WeMovies</Title>
      <CartContainer>
        <div>
          <CartTitle>Meu Carrinho</CartTitle>
          <CartSubtitle>0 items</CartSubtitle>
        </div>
        <CartIcon />
      </CartContainer>
    </Container>
  );
};

export default Navbar;
