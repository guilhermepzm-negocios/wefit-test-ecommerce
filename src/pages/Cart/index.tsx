import React, { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { ApplicationState } from "~/store/types";
import { Container, EmptyContainer, Title, Button, EmptyImage } from "./styles";
import { useNavigate } from "react-router-dom";
import CartInfo from "~/components/CartInfo";

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const cart = useSelector((state: ApplicationState) => state.cart.data);

  const isEmpty = useMemo(() => cart.items.length === 0, [cart]);

  const handleNavigate = useCallback(() => {
    navigate("/");
  }, []);

  return (
    <Container>
      {isEmpty ? (
        <EmptyContainer>
          <Title>Parece que não há nada por aqui :(</Title>
          <EmptyImage />
          <Button onClick={handleNavigate}>Voltar</Button>
        </EmptyContainer>
      ) : (
        <CartInfo cart={cart} />
      )}
    </Container>
  );
};

export default Cart;
