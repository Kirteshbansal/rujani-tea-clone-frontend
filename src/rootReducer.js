import { combineReducers } from "redux";

import productsSlice from "./products/productsSlice";
import collectionSlice from "./collection/collectionSlice";

export default combineReducers({
  products: productsSlice,
  collectionProducts: collectionSlice,
});
