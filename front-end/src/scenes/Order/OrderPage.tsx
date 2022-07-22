import { useTypedSelector } from "../../hooks/useTypedSelector";
import { selectCartOrderUnits } from "../../selector";
import Cart from "./comonents/Cart/Cart";
import UserForm from "./comonents/UserFrom/UserForm";
import {
  CartSection,
  FormSection,
  OrderPageWrapper,
  TotalSum,
  TotalSumBlock,
  TotalSumTitle,
} from "./OrderPage.styled";

const OrderPage: React.FC = () => {
  const units = useTypedSelector(selectCartOrderUnits);

  return (
    <OrderPageWrapper>
      <FormSection>
        <UserForm />
      </FormSection>
      <CartSection>
        <Cart />
        <TotalSumBlock>
          <TotalSumTitle variant="body1">Total sum:</TotalSumTitle>
          <TotalSum>
            {units
              .reduce((acc, val) => acc + val.count * val.price, 0)
              .toLocaleString("us-US", { style: "currency", currency: "USD" })}
          </TotalSum>
        </TotalSumBlock>
      </CartSection>
    </OrderPageWrapper>
  );
};

export default OrderPage;
