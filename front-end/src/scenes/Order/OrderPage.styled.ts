import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const OrderPageWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

export const CartSection = styled(Box)`
  width: 500px;
`;

export const FormSection = styled(Box)`
  width: 500px;
`;

export const TotalSumBlock = styled(Box)`
  display: flex;
  padding-top: 30px;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const TotalSumTitle = styled(Typography)`
  font-size: 20px !important;
`;

export const TotalSum = styled(Typography)`
  font-size: 20px !important;
  color: green !important;
`;
