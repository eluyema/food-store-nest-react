import { api } from "../../../helpers/http";
import { ShopInfo } from "../common/types/types";

export const getProducts = async (currentShopId: string) => {
  const shops: ShopInfo[] = await api.get({
    url: `shop/${currentShopId}/product`,
  });
  return shops;
};
