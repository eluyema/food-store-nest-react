import { Paper, Typography, Button, Box } from "@mui/material";
import styled from "styled-components";

export const ProductWrapper = styled(Paper)`
  width: 300px;
  height: 320px;
  display: flex;
  padding: 10px;
  align-items: center;
  flex-direction: column;
`;

export const ProductBody = styled(Box)`
  displat: flex;
  flex-direction: column;
`;

export const ProductTitle = styled(Typography)`
  width: 280px;
  white-space: nowrap;
  overflow: hidden;
  font-size: 24px !important;
  line-height: 1.35 !important;
  text-overflow: ellipsis;
`;

export const ProductPrice = styled(Typography)`
  color: green;
  font-size: 18px !important;
`;

export const ActionsBlock = styled(Box)`
  display: flex;
  align-items: center;
  height: 45px;
  justify-content: space-between;
`;

export const ImageBox = styled(Box)`
  width: 270px;
  height: 220px;
  min-height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImageProduct = styled.img`
  max-height: 100%;
  max-width: 100%;
`;
export const AddToCartButton = styled(Button)``;

export const UnabailabelMessage = styled(Typography)`
  color: red;
  text-align: center;
  font-size: 18px;
  line-height: 1.2;
`;
