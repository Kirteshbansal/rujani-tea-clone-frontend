import { combineReducers } from "redux";

import productsSlice from "./products/productsSlice";
import collectionsSlice from "./collections/collectionsSlice";
import collectionSlice from "./collection/collectionSlice";
import productSlice from "./product/productSlice";
import cartSlice from "./cart/cartSlice";
import userSlice from "./auth/authSlice";

const rootReducer = combineReducers({
    products: productsSlice,
    collections: collectionsSlice,
    collectionProducts: collectionSlice,
    product: productSlice,
    cart: cartSlice,
    user: userSlice,
});

export default rootReducer;
