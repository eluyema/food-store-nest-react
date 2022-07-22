import { TextField } from "@mui/material";
import { useCallback } from "react";
import { useAction } from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { OrderUnit } from "../../../../reducers/cartReducer";
import { selectCartOrderUnits } from "../../../../selector";
import {
  FieldWrapper,
  ImageBox,
  ImageUnit,
  RemoveIcon,
  UnitBody,
  UnitBodyFooter,
  UnitBodyHeader,
  UnitCartLogic,
  UnitPrice,
  UnitSubtitle,
  UnitTitle,
  UnitWrapper,
} from "./CartUnit.styled";

const CartUnit = ({ _id, count, name, image, price }: OrderUnit) => {
  const { setProductCount, removeProductFromCart } = useAction();

  const removeUnitFromCart = useCallback(() => {
    removeProductFromCart(_id);
  }, []);

  return (
    <UnitWrapper elevation={2}>
      <ImageBox>
        <ImageUnit src={image} />
      </ImageBox>
      <UnitBody>
        <UnitBodyHeader>
          <UnitTitle variant="subtitle2">{name}</UnitTitle>{" "}
          <RemoveIcon onClick={removeUnitFromCart} />
        </UnitBodyHeader>
        <UnitCartLogic>
          <UnitPrice variant="subtitle1">
            {price.toLocaleString("us-US", {
              style: "currency",
              currency: "USD",
            })}
          </UnitPrice>
          <FieldWrapper>
            <TextField
              type="number"
              name="totalBill"
              label="Count"
              inputProps={{ min: 0 }}
              variant="outlined"
              value={count}
              onChange={(event) =>
                setProductCount(_id, Number(event.target.value))
              }
            />
          </FieldWrapper>
        </UnitCartLogic>
        <UnitBodyFooter>
          <UnitSubtitle variant="caption">Sum:</UnitSubtitle>
          <UnitPrice>
            {(price * count).toLocaleString("us-US", {
              style: "currency",
              currency: "USD",
            })}
          </UnitPrice>
        </UnitBodyFooter>
      </UnitBody>
    </UnitWrapper>
  );
};

export default CartUnit;
