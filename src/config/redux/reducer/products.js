const initProductState = {
  products: [],
};

export const productsReducer = (state = initProductState, action) => {
  if (action.type === "GET_DATA_PRODUCT") {
    return {
      ...state,
      products: action.value,
    };
  }

  return state;
};
