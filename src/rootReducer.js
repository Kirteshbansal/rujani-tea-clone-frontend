import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import productsSlice from "./products/productsSlice";
import collectionsSlice from "./collections/collectionsSlice";
import collectionSlice from "./collection/collectionSlice";
import productSlice from "./product/productSlice";
import cartSlice from "./cart/cartSlice";
import userSlice from "./auth/authSlice";

const userPersistConfig = {
    key: "user",
    storage: storage,
    blacklist: ["loading", "error"],
};

const rootReducer = combineReducers({
    products: productsSlice,
    collections: collectionsSlice,
    collectionProducts: collectionSlice,
    product: productSlice,
    cart: cartSlice,
    user: persistReducer(userPersistConfig, userSlice),
});

export default rootReducer;
