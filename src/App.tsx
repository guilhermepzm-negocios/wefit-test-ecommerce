import React from "react";
import RootRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <RootRoutes />
    </BrowserRouter>
  );
};

export default App;
