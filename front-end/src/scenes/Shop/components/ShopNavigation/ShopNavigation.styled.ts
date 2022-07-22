import { Paper, Typography } from "@mui/material";
import styled from "styled-components";

export const ShopNavigationWrapper = styled(Paper)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 18px;
`;

export const NavigationTitle = styled(Typography)`
  text-align: center;
  color: #474747 !important;
  font-size: 24px !important;
  padding-bottom: 10px;
  border-bottom: 1px #adadad solid;
`;
