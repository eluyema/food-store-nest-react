import { AppBar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled(AppBar)`
  height: 70px;
`;
export const HeaderBody = styled(Box)`
  height: 70px;
  display: flex;
  padding: 0 20px;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const HeaderLinkList = styled(Box)`
  display: flex;
  gap: 20px;
`;

export const HeaderLink = styled(Typography)<{ disabled: boolean }>`
  font-size: 20px !important;
  padding: 0 7px;
  background-color: ${({ disabled }) =>
    disabled ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0)"};
  border-radius: 7px;
`;
