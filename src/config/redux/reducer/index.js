import { combineReducers } from "redux";
import { registerReducer } from "./auth";
import { globalReducer } from "./global";
import { productsReducer } from "./products";
import { cartReducer } from "./cart";
import { checkoutReducer } from "./checkout";
const reducer = combineReducers({
  registerReducer,
  globalReducer,
  productsReducer,
  cartReducer,
  checkoutReducer,
});

export default reducer;
