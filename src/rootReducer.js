import { combineReducers } from "redux";

import productsSlice from "./products/productsSlice";

export default combineReducers({
  products: productsSlice,
});
