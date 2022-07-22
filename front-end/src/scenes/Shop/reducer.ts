import { Product } from "../../common/types";
import { createReducer } from "../../helpers/createReducer";
import {
  fetchProductsByShopId,
  FetchProductsByShopIdTypeSuccessActionType,
  fetchShopsNames,
  FetchShopsNamesTypeSuccessActionType,
} from "./actions";

export interface ShopsState {
  shops: { _id: string; name: string }[];
  products: Product[];
}

export const initialShopsState: ShopsState = {
  shops: [],
  products: [],
};

export const shopsReducer = createReducer<ShopsState>(initialShopsState, {
  [fetchShopsNames.SUCCESS](
    state,
    action: FetchShopsNamesTypeSuccessActionType
  ) {
    return {
      ...state,
      shops: action.payload,
    };
  },
  [fetchProductsByShopId.SUCCESS](
    state,
    action: FetchProductsByShopIdTypeSuccessActionType
  ) {
    return {
      ...state,
      products: action.payload,
    };
  },
});

export default shopsReducer;
