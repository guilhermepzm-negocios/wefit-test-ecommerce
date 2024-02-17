import React, { useCallback } from "react";
import { Container, Content, Title, CustomButtonRoot, Image } from "./styles";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "~/components/CustomButton";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate("/");
  }, []);

  return (
    <Container>
      <Content>
        <Title>Ops, Página não encontrada!</Title>
        <Image />
        <CustomButtonRoot onClick={handleNavigate}>
          <CustomButton.Content text="Voltar" />
        </CustomButtonRoot>
      </Content>
    </Container>
  );
};

export default NotFound;
