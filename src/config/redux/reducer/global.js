const initGlobalState = {
  isError: false,
  message: "error",
  isLoading: false,
  isLogin: false,
  isLogout: true,
};

export const globalReducer = (state = initGlobalState, action) => {
  if (action.type === "SET_ERROR") {
    return {
      ...state,
      isError: action.value.isError,
      message: action.value.message,
    };
  }

  if (action.type === "SET_LOADING") {
    return {
      ...state,
      isLoading: action.value,
    };
  }

  if (action.type === "ISLOGIN") {
    return {
      ...state,
      isLogin: action.value,
    };
  }

  if (action.type === "ISLOGOUT") {
    return {
      ...state,
      isLogout: action.value,
    };
  }
  return state;
};
