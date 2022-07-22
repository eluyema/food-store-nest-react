import { createRoutine } from "redux-saga-routines";
import { Product } from "../../common/types";
import { ShopInfo } from "./common/types/types";
export enum ShopsActions {
  FETCH_SHOPS_NAMES = "SHOPS/FETCH_SHOPS_NAMES",
  FETCH_PRODUCTS_BY_SHOPS_ID = "FETCH_PRODUCTS_BY_SHOP_ID",
}

export const fetchShopsNames = createRoutine(ShopsActions.FETCH_SHOPS_NAMES, {
  trigger: () => undefined,
  success: ({ shops }: { shops: ShopInfo[] }) => shops,
  failure: (error: string) => error,
});

export const fetchProductsByShopId = createRoutine(
  ShopsActions.FETCH_PRODUCTS_BY_SHOPS_ID,
  {
    trigger: ({ currentShopId }: { currentShopId: string }) => ({
      currentShopId,
    }),
    success: ({ products }: { products: Product[] }) => products,
    failure: (error: string) => error,
  }
);

export type FetchProductsByShopIdTypeTriggerActionType = ReturnType<
  typeof fetchProductsByShopId.trigger
>;

export type FetchProductsByShopIdTypeSuccessActionType = ReturnType<
  typeof fetchProductsByShopId.success
>;

export type FetchProductsByShopIdTypeFailureActionType = ReturnType<
  typeof fetchProductsByShopId.failure
>;

export type FetchShopsNamesTypeTriggerActionType = ReturnType<
  typeof fetchShopsNames.trigger
>;

export type FetchShopsNamesTypeSuccessActionType = ReturnType<
  typeof fetchShopsNames.success
>;

export type FetchShopsNamesTypeFailureActionType = ReturnType<
  typeof fetchShopsNames.failure
>;
