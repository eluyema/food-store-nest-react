import { createSelector } from "reselect";
import { StoreState } from "../../common/types";

const selectShopReducer = (state: StoreState) => state.shops;

export const selectShops = createSelector(
  [selectShopReducer],
  (shops) => shops.shops
);

export const selectProducts = createSelector(
  [selectShopReducer],
  (shops) => shops.products
);
