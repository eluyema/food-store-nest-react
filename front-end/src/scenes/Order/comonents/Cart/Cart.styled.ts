import styled from "styled-components";
import { Box, Paper } from "@mui/material";

export const CartSection = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const CartUnitsWrapper = styled(Paper)`
  height: 500px;
  width: 450px;
  padding: 20px 25px 20px 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
`;
