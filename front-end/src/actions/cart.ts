import { createRoutine } from "redux-saga-routines";
import { Product } from "../common/types";

export enum CartActions {
  ADD_ITEM_TO_CART = "CART/ADD_ITEM_TO_CART",
  INCREASE_PRODUCT_COUNT = "CART/INCREASE_PRODUCT_COUNT",
  DECREASE_PRODUCT_COUNT = "CART/INCREASE_PRODUCT_COUNT",
  REMOVE_PRODUCT_FROM_CART = "CART/REMOVE_PRODUCT_FROM_CART",
  SET_PRODUCT_COUNT = "CART/SET_PRODUCT_COUNT",
  CLEAR_CART = "CART/CLEAR_CART",
}

export const addItemToCart = createRoutine(CartActions.ADD_ITEM_TO_CART, {
  trigger: (product: Product, fixedShopId: string) => ({
    product,
    fixedShopId,
  }),
});

export const increaseProductCount = createRoutine(
  CartActions.INCREASE_PRODUCT_COUNT,
  {
    trigger: (productId: string) => productId,
  }
);

export const decreaseProductCount = createRoutine(
  CartActions.DECREASE_PRODUCT_COUNT,
  {
    trigger: (productId: string) => productId,
  }
);

export const removeProductFromCart = createRoutine(
  CartActions.REMOVE_PRODUCT_FROM_CART,
  {
    trigger: (productId: string) => productId,
  }
);

export const clearCart = createRoutine(CartActions.CLEAR_CART, {
  trigger: () => undefined,
});

export const setProductCount = createRoutine(CartActions.SET_PRODUCT_COUNT, {
  trigger: (productId: string, count: number) => ({ productId, count }),
});

export type AddItemToCartTypeTriggerActionType = ReturnType<
  typeof addItemToCart.trigger
>;

export type IncreaseProductCountTypeTriggerActionType = ReturnType<
  typeof increaseProductCount.trigger
>;

export type DecreaseProductCountTypeTriggerActionType = ReturnType<
  typeof decreaseProductCount.trigger
>;

export type RemoveProductFromCartTypeTriggerActionType = ReturnType<
  typeof removeProductFromCart.trigger
>;

export type SetProductCountTypeTriggerActionType = ReturnType<
  typeof setProductCount.trigger
>;
