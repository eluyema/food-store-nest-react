import React, { useCallback, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { selectShops } from "../../selector";
import {
  NavigationTitle,
  ShopNavigationWrapper,
} from "./ShopNavigation.styled";
import { useAction } from "../../../../hooks/useActions";

const ShopNavigation: React.FC = () => {
  const { shopId } = useParams();

  const navigate = useNavigate();

  const shops = useTypedSelector(selectShops);

  const isExistShop = shopId && !shops.every(({ _id }) => _id !== shopId);

  const redirectToShop = useCallback((shopId: string) => {
    if (shopId) {
      navigate("../" + shopId);
    } else {
      navigate(shopId);
    }
  }, []);

  const { fetchShopsNames } = useAction();
  useEffect(() => {
    fetchShopsNames();
  }, []);

  if (!shops.length) {
    return null;
  }

  return (
    <ShopNavigationWrapper>
      <NavigationTitle variant="h4">Shops</NavigationTitle>
      {shops.map((shop, i) => {
        if (isExistShop && shop._id === shopId) {
          return (
            <Button key={shop._id} variant="contained">
              {shop.name}
            </Button>
          );
        }
        if (!isExistShop && i === 0) {
          return (
            <Button key={shop._id} variant="contained">
              {shop.name}
            </Button>
          );
        }
        return (
          <Button
            key={shop._id}
            variant="text"
            onClick={() => {
              redirectToShop(shop._id);
            }}
          >
            {shop.name}
          </Button>
        );
      })}
    </ShopNavigationWrapper>
  );
};

export default ShopNavigation;
