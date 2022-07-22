import { Slug } from "../enums/app/slug";

export const AppRoutes = [
  {
    name: "Shop",
    route: Slug.BASE + Slug.SHOP,
  },
  {
    name: "Shopping Cart",
    route: Slug.BASE + Slug.ORDER,
  },
];
