const initStateCart = {
  cart: [],
  input: [],
};

export const cartReducer = (state = initStateCart, action) => {
  if (action.type === "SET_DATA_CART") {
    return {
      ...state,
      cart: action.value,
    };
  }

  if (action.type === "INSERT_CART") {
    return {
      ...state,
      input: action.value,
    };
  }

  return state;
};
