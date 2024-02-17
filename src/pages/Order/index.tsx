import React, { useCallback } from "react";
import { Container, Content, Title, Button, OrderImage } from "./styles";
import { useNavigate } from "react-router-dom";

const Order: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate("/");
  }, []);

  return (
    <Container>
      <Content>
        <Title>Compra realizada com sucesso!</Title>
        <OrderImage />
        <Button onClick={handleNavigate}>Voltar</Button>
      </Content>
    </Container>
  );
};

export default Order;
