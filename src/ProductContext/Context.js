import { createContext, useContext, useReducer } from "react";

import { productsData } from "./Data";
import { productsReducer } from "./Reducer";
import { sortProducts, compose } from "./Utils";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, {
    sortBy: ""
  });

  const filteredProducts = compose(state, sortProducts)(productsData);

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
