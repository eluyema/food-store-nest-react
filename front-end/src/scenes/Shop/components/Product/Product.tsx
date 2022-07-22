import { Button } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Product as ProductType } from "../../../../common/types";
import { useAction } from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { OrderUnit } from "../../../../reducers/cartReducer";
import { selectCartFixedShopId } from "../../../../selector";
import {
  ActionsBlock,
  AddToCartButton,
  ImageProduct,
  ImageBox,
  ProductBody,
  ProductPrice,
  ProductTitle,
  ProductWrapper,
  UnabailabelMessage,
} from "./Product.styled";

interface ProductProps {
  shopId: string;
  productId: string;
  image: string;
  name: string;
  price: number;
}

export const Product: React.FC<ProductProps> = ({
  shopId,
  productId,
  image,
  name,
  price,
}) => {
  const fixedShopId = useTypedSelector(selectCartFixedShopId);
  const { addItemToCart } = useAction();
  const addToCart = useCallback(() => {
    const product: ProductType = { _id: productId, image, name, price };
    addItemToCart(product, shopId);
  }, []);

  return (
    <ProductWrapper elevation={2}>
      <ImageBox>
        <ImageProduct src={image} alt={"Image of " + name} />
      </ImageBox>
      <ProductBody>
        <ProductTitle variant="subtitle2">{name}</ProductTitle>
        <ActionsBlock>
          <ProductPrice variant="subtitle1">
            {price.toLocaleString("us-US", {
              style: "currency",
              currency: "USD",
            })}
          </ProductPrice>
          {fixedShopId !== null && fixedShopId !== shopId ? (
            <UnabailabelMessage variant="subtitle2">
              You already have products from another shop
            </UnabailabelMessage>
          ) : (
            <AddToCartButton onClick={addToCart}>Add to cart</AddToCartButton>
          )}
        </ActionsBlock>
      </ProductBody>
    </ProductWrapper>
  );
};

export default Product;
