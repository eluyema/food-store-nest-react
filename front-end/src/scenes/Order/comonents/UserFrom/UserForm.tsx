import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import {
  InputsWrapper,
  OrderButton,
  UserFormWrapper,
} from "./UserFormWrapper.styled";
import FormikTextInput from "../../../../components/FormikTextInput/FormikTextInput";
import { RequestOrder } from "../../../../common/types";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import {
  selectCartFixedShopId,
  selectCartOrderUnits,
} from "../../../../selector";
import { postOrder } from "../../services/post-order";
import { useAction } from "../../../../hooks/useActions";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Must be 2 characters or more")
    .max(40, "Must be 40 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phone: Yup.string()
    .min(7, "Must be 5 characters or more")
    .max(14, "Must be 16 characters or less")
    .required("Required"),
  address: Yup.string()
    .min(20, "Must be 20 characters or more")
    .max(300, "Must be 300 characters or less")
    .required("Required"),
});

const initialValues = {
  name: "",
  phone: "",
  email: "",
  address: "",
};

const UserForm = () => {
  const fixedShopId = useTypedSelector(selectCartFixedShopId);
  const orderUnits = useTypedSelector(selectCartOrderUnits);
  const { clearCart } = useAction();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        if (!fixedShopId ) {
          setSubmitting(false);
          return;
        }
        const valideOrder = orderUnits.length && orderUnits.reduce((acc, v)=>acc+v.count,0)>0;
        if (!valideOrder ) {
            setSubmitting(false);
            return;
          }
        const order: RequestOrder = {
          ...values,
          orderUnits: orderUnits.map(({ count, _id }) => ({
            count,
            productId: _id,
          })),
          shopId: fixedShopId,
        };



        postOrder(order)
          .then(() => {
            clearCart();
            setSubmitting(false);
          });
      }}
    >
      <Form>
        <UserFormWrapper>
          <InputsWrapper>
            <FormikTextInput
              label="Name"
              name="name"
              type="text"
              placeholder="Name"
            />
            <FormikTextInput
              label="email"
              name="email"
              type="email"
              placeholder="Email"
            />
            <FormikTextInput
              label="Phonenumber"
              name="phone"
              type="text"
              placeholder="Phonenumber"
            />
            <FormikTextInput
              label="Address"
              name="address"
              type="text"
              placeholder="Address"
            />
          </InputsWrapper>
          <OrderButton type="submit" variant="contained">
            Order
          </OrderButton>
        </UserFormWrapper>
      </Form>
    </Formik>
  );
};

export default UserForm;
