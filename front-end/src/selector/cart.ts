import { createSelector } from "reselect";
import { StoreState } from "../common/types";

const selectCartReducer = (state: StoreState) => state.cart;

export const selectCartFixedShopId = createSelector(
  [selectCartReducer],
  (cart) => cart.fixedShopId
);

export const selectCartOrderUnits = createSelector(
  [selectCartReducer],
  (cart) => cart.orderUnits
);
