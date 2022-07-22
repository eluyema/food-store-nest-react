import { Box, Button, Paper } from "@mui/material";
import styled from "styled-components";

export const UserFormWrapper = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 500px;
`;

export const InputsWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
`;

export const OrderButton = styled(Button)`
  background-color: orange !important;
`;
