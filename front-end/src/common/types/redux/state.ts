import { CartState } from "../../../reducers/cartReducer";
import { ShopsState } from "../../../scenes/Shop/reducer";

export interface StoreState {
  cart: CartState;
  shops: ShopsState;
}
