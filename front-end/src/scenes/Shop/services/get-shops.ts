import { api } from "../../../helpers/http";
import { ShopInfo } from "../common/types/types";

export const getShops = async () => {
  const shops: ShopInfo[] = await api.get({ url: "shop/names" });
  return shops;
};
