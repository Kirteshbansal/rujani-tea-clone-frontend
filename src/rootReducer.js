import { combineReducers } from "redux";

import productsSlice from "./products/productsSlice";
import collectionSlice from "./collection/collectionSlice";
import productSlice from "./product/productSlice";

export default combineReducers({
  products: productsSlice,
  collectionProducts: collectionSlice,
  product: productSlice,
});
