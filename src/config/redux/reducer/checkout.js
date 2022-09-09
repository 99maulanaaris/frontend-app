const initialState = {
  checkout: [],
};

export const checkoutReducer = (state = initialState, action) => {
  if (action.type === "SET_DATA_CHECKOUT") {
    return {
      ...state,
      checkout: action.value,
    };
  }

  return state;
};
