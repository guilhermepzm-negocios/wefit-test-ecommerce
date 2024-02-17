import React, { useCallback } from "react";
import { Container, Content, Title, Button, Image } from "./styles";
import { useNavigate } from "react-router-dom";

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
        <Button onClick={handleNavigate}>Voltar</Button>
      </Content>
    </Container>
  );
};

export default NotFound;
