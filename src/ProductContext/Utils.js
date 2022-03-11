const sortProducts = (state, products) => {
  switch (state.sortBy) {
    case "low-to-high":
      return products.sort(
        (prodA, prodB) => Number(prodA.price) - Number(prodB.price)
      );
    case "high-to-low":
      return products.sort(
        (prodA, prodB) => Number(prodB.price) - Number(prodA.price)
      );
    default:
      return products;
  }
};

const compose = (state, ...acc) => (initialData) =>
  acc.reduce((acc, curFn) => curFn(state, acc), initialData);

export { sortProducts, compose };
