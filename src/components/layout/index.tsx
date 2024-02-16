import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./styles";
import Navbar from "./components/Navbar";

const Layout: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <main>
          <Outlet />
        </main>
      </Container>
    </React.Fragment>
  );
};

export default Layout;
