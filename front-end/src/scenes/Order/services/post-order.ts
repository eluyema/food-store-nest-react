import { RequestOrder } from "../../../common/types";
import { api } from "../../../helpers/http";

export const postOrder = async (order: RequestOrder) => {
  return api.post({ url: `order`, params: order });
};
