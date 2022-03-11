const productsReducer = (state, { type, payload }) => {
  switch (type) {
    case "SORT_BY":
      return { ...state, sortBy: payload };
    default:
      return state;
  }
};

export { productsReducer };
