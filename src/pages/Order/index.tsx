import React, { useCallback } from "react";
import {
  Container,
  Content,
  Title,
  CustomButtonRoot,
  OrderImage,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "~/components/CustomButton";

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
        <CustomButtonRoot onClick={handleNavigate}>
          <CustomButton.Content text="Voltar" />
        </CustomButtonRoot>
      </Content>
    </Container>
  );
};

export default Order;
