import {
  addItemToCart,
  AddItemToCartTypeTriggerActionType,
  clearCart,
  decreaseProductCount,
  DecreaseProductCountTypeTriggerActionType,
  increaseProductCount,
  IncreaseProductCountTypeTriggerActionType,
  removeProductFromCart,
  RemoveProductFromCartTypeTriggerActionType,
  setProductCount,
  SetProductCountTypeTriggerActionType,
} from "../actions/cart";
import { createReducer } from "../helpers/createReducer";

export interface OrderUnit {
  _id: string;
  count: number;
  name: string;
  image: string;
  price: number;
}

export interface CartState {
  fixedShopId: string | null;
  orderUnits: OrderUnit[];
}

export const initialCartState: CartState = {
  fixedShopId: null,
  orderUnits: [],
};

export const cartReducer = createReducer<CartState>(initialCartState, {
  [addItemToCart.TRIGGER](state, action: AddItemToCartTypeTriggerActionType) {
    const product = action.payload.product;
    const isIncluded: boolean = !state.orderUnits.every(
      (unit) => unit._id !== product._id
    );
    const newOrderUnits = isIncluded
      ? state.orderUnits.map((unit) => {
          if (unit._id === product._id) {
            return { ...unit, count: unit.count + 1 };
          }
          return unit;
        })
      : [...state.orderUnits, { ...product, count: 1 }];
    return {
      ...state,
      fixedShopId: action.payload.fixedShopId,
      orderUnits: newOrderUnits,
    };
  },
  [clearCart.TRIGGER](state) {
    return { ...state, fixedShopId: null, orderUnits: [] };
  },
  [increaseProductCount.TRIGGER](
    state,
    action: IncreaseProductCountTypeTriggerActionType
  ) {
    const productId = action.payload;

    const newOrderUnits = state.orderUnits.map((unit) => {
      if (unit._id === productId) return { ...unit, count: unit.count + 1 };
      return unit;
    });

    return { ...state, orderUnits: newOrderUnits };
  },
  [decreaseProductCount.TRIGGER](
    state,
    action: DecreaseProductCountTypeTriggerActionType
  ) {
    const productId = action.payload;

    const newOrderUnits = state.orderUnits.map((unit) => {
      if (unit._id === productId) return { ...unit, count: unit.count - 1 };
      return unit;
    });

    return {
      ...state,
      orderUnits: newOrderUnits,
      fixedShopId: !newOrderUnits.length ? null : state.fixedShopId,
    };
  },
  [removeProductFromCart.TRIGGER](
    state,
    action: RemoveProductFromCartTypeTriggerActionType
  ) {
    const productId = action.payload;

    const newOrderUnits = state.orderUnits.filter(
      (unit) => unit._id !== productId
    );

    return {
      ...state,
      orderUnits: newOrderUnits,
      fixedShopId: !newOrderUnits.length ? null : state.fixedShopId,
    };
  },
  [setProductCount.TRIGGER](
    state,
    action: SetProductCountTypeTriggerActionType
  ) {
    const productId = action.payload.productId;
    const count = action.payload.count;

    const newOrderUnits = state.orderUnits.map((unit) => {
      if (unit._id === productId) return { ...unit, count: count };
      return unit;
    });

    return {
      ...state,
      orderUnits: newOrderUnits,
      fixedShopId: !newOrderUnits.length ? null : state.fixedShopId,
    };
  },
});
export default cartReducer;
