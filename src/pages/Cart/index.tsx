import React, { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { ApplicationState } from "~/store/types";
import {
  Container,
  EmptyContainer,
  Title,
  EmptyImage,
  CustomButtonRoot,
} from "./styles";
import { useNavigate } from "react-router-dom";
import CartInfo from "./CartInfo";
import { CustomButton } from "~/components/CustomButton";

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
          <CustomButtonRoot onClick={handleNavigate}>
            <CustomButton.Content text="Voltar" />
          </CustomButtonRoot>
        </EmptyContainer>
      ) : (
        <CartInfo cart={cart} />
      )}
    </Container>
  );
};

export default Cart;
