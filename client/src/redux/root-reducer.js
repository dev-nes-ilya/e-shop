import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// storage equal window.localStorage
import storage from "redux-persist/lib/storage";
// storage equal window.sessionStorage
// import sessionStorage from 'redux-persist/lib/storage'

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"],
  blackList: ["shop", "user"]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
