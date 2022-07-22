import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { selectCartOrderUnits } from "../../../../selector";
import { CartSection, CartUnitsWrapper } from "./Cart.styled";
import CartUnit from "../CartUnit/CartUnit";

const Cart: React.FC = () => {
  const units = useTypedSelector(selectCartOrderUnits);

  return (
    <CartSection>
      <CartUnitsWrapper>
        {units.map((unit) => (
          <CartUnit key={unit._id} {...unit} />
        ))}
      </CartUnitsWrapper>
    </CartSection>
  );
};

export default Cart;
