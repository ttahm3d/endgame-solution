import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ProductsProvider } from "./ProductContext/Context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </StrictMode>,
  rootElement
);
