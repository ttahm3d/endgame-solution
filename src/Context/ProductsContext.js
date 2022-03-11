import { productsData } from "./ProductsData";

const { createContext, useContext } = require("react");

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const filteredProducts = productsData;

  return (
    <ProductsContext.Provider
      value={{
        products: filteredProducts
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => useContext(ProductsContext);

export { useProducts, ProductsProvider };
