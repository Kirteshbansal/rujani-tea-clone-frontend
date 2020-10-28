import { combineReducers } from "redux";

import productsSlice from "./products/productsSlice";
import collectionSlice from "./collection/collectionSlice";
import productSlice from "./product/productSlice";
import cartSlice from "./cart/cartSlice";
import userSlice from "./auth/authSlice";

export default combineReducers({
  products: productsSlice,
  collectionProducts: collectionSlice,
  product: productSlice,
  cart: cartSlice,
  user: userSlice,
});
