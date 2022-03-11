import { createContext, useContext, useReducer } from "react";

import { productsData } from "./Data";
import { productsReducer } from "./Reducer";
import {
  sortProducts,
  hideOutOfStockProducts,
  showFastDeliveryProducts,
  productsWithMinPrice,
  compose
} from "./Utils";

const ProductsContext = createContext();

const initialState = {
  sortBy: "",
  showOnlyInStock: false,
  showOnlyFastDelivery: false,
  minPrice: 0
};

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const filteredProducts = compose(
    state,
    sortProducts,
    showFastDeliveryProducts,
    hideOutOfStockProducts,
    productsWithMinPrice
  )(productsData);

  return (
    <ProductsContext.Provider
      value={{
        products: filteredProducts,
        state,
        dispatch
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => useContext(ProductsContext);

export { useProducts, ProductsProvider };
