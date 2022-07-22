import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAction } from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { selectProducts, selectShops } from "../../selector";
import Product from "../Product/Product";
import { ProductsWrapper } from "./ProductsContainer.styled";

export const ProductsContainer = () => {
  const { shopId } = useParams();
  const { fetchProductsByShopId } = useAction();
  const products = useTypedSelector(selectProducts);
  const shops = useTypedSelector(selectShops);

  useEffect(() => {
    if (shopId || shops.length)
      fetchProductsByShopId({ currentShopId: shopId || shops[0]._id });
  }, [shopId, shops]);

  return (
    <ProductsWrapper>
      {products.map((product) => (
        <Product
          shopId={shopId || shops[0]._id}
          productId={product._id}
          image={product.image}
          name={product.name}
          price={product.price}
          key={product._id}
        />
      ))}
    </ProductsWrapper>
  );
};

export default ProductsContainer;
