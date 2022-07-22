import styled from "styled-components";
import { Box } from "@mui/material";

export const ShopPageWrapper = styled(Box)`
  width: 100%;
  display: flex;
`;

export const ShopPageNavigationSection = styled(Box)`
  width: 220px;
  padding: 20px;
`;

export const ShopPageContentSection = styled(Box)`
  width: calc(100% - 220px);
  padding: 20px;
`;
