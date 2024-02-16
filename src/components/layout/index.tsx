import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Content } from "./styles";
import Navbar from "./components/Navbar";

const Layout: React.FC = () => {
  return (
    <React.Fragment>
      <Container>
        <Navbar />
        <Content>
          <Outlet />
        </Content>
      </Container>
    </React.Fragment>
  );
};

export default Layout;
