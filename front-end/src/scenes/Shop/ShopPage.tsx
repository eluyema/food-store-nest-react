import React from "react";
import ProductsContainer from "./components/ProductsContainer/ProductsContainer";
import ShopNavigation from "./components/ShopNavigation/ShopNavigation";
import {
  ShopPageContentSection,
  ShopPageNavigationSection,
  ShopPageWrapper,
} from "./ShopPage.styled";

const ShopPage: React.FC = () => {
  return (
    <ShopPageWrapper>
      <ShopPageNavigationSection>
        <ShopNavigation />
      </ShopPageNavigationSection>
      <ShopPageContentSection>
        <ProductsContainer />
      </ShopPageContentSection>
    </ShopPageWrapper>
  );
};

export default ShopPage;
