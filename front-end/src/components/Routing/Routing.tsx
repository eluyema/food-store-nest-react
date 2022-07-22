import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Slug } from "../../common/enums/app/slug";
import OrderPage from "../../scenes/Order/OrderPage";
import ShopPage from "../../scenes/Shop/ShopPage";
import Header from "../Header/Header";

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path={Slug.BASE} element={<Header />}>
        <Route index element={<Navigate to={Slug.SHOP} replace />} />
        <Route path={Slug.SHOP}>
          <Route index element={<ShopPage />} />
          <Route path=":shopId" element={<ShopPage />} />
        </Route>
        <Route path={Slug.ORDER} element={<OrderPage />} />
        <Route path="*" element={<Navigate to={Slug.SHOP} replace />} />
      </Route>
    </Routes>
  );
};

export default Routing;
