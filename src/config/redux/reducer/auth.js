const initStateRegister = {
  name: "",
  email: "",
  password: "",
};

export const registerReducer = (state = initStateRegister, action) => {
  if (action.type === "SET_REGISTER") {
    return {
      ...state,
      name: action.value.name,
      email: action.value.email,
      password: action.value.password,
    };
  }
  return state;
};
