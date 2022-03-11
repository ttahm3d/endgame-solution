const productsReducer = (state, { type, payload }) => {
  switch (type) {
    case "SORT_BY":
      return { ...state, sortBy: payload };
    case "OUT_OF_STOCK":
      return { ...state, showOnlyInStock: payload };
    case "FAST_DELIVERY":
      return { ...state, showOnlyFastDelivery: payload };
    case "MIN_PRICE":
      return { ...state, minPrice: Number(payload) };
    case "RESET":
      return {
        ...state,
        sortBy: "",
        showOnlyInStock: false,
        showOnlyFastDelivery: false,
        minPrice: 0
      };
    default:
      return state;
  }
};

export { productsReducer };
