import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./Theme";
import { PersistGate } from "redux-persist/integration/react";
import { Provider as StoreProvider } from "react-redux";
import { persistor, store } from "./store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <StoreProvider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyle />
        <App />
        <ToastContainer autoClose={2000} />
      </PersistGate>
    </StoreProvider>
  </ThemeProvider>
);
