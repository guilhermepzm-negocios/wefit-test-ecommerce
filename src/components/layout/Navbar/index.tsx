import React, { useCallback } from "react";
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
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const cartQuantity = useSelector((state: ApplicationState) =>
    state.cart.data.items.reduce((acc, item) => acc + item.quantity, 0)
  );
  const handleNavigate = useCallback((path: string) => {
    navigate(path);
  }, []);
  return (
    <Container>
      <Title onClick={() => handleNavigate("/")}>WeMovies</Title>
      <CartContainer onClick={() => handleNavigate("/cart")}>
        <CartInfoContainer>
          <CartTitle>Meu Carrinho</CartTitle>
          <CartSubtitle>{cartQuantity} itens</CartSubtitle>
        </CartInfoContainer>
        <CartIcon />
      </CartContainer>
    </Container>
  );
};

export default Navbar;
