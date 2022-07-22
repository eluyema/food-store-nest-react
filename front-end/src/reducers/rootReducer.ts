import { combineReducers } from "redux";
import { StoreState } from "../common/types";
import shopsReducer, { initialShopsState } from "../scenes/Shop/reducer";
import cartReducer, { initialCartState } from "./cartReducer";
const initialState: StoreState = {
  cart: initialCartState,
  shops: initialShopsState,
};

const rootReducer = combineReducers({
  cart: cartReducer,
  shops: shopsReducer,
});

export { rootReducer, initialState };
