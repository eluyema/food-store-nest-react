export interface RequestOrder {
  name: string;
  email: string;
  phone: string;
  address: string;
  shopId: string;
  orderUnits: {
    count: number;
    productId: string;
  }[];
}
