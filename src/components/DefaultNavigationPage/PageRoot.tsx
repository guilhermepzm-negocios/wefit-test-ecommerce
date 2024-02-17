import React, { ReactNode } from "react";
import { Container, Content } from "./styles";
import { ButtonProps } from "antd";

interface Props extends ButtonProps {
  children: ReactNode;
}

const PageRoot: React.FC<Props> = ({ children, ...rest }: Props) => {
  return (
    <Container>
      <Content {...rest}>{children}</Content>
    </Container>
  );
};

export default PageRoot;
