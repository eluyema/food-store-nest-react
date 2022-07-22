import { Paper, Box, Typography } from "@mui/material";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

export const UnitWrapper = styled(Paper)`
  width: 410px;
  height: 180px;
  padding: 10px;
  display: flex;
`;

export const ImageBox = styled(Box)`
  width: 200px;
  height: 160px;
  min-height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImageUnit = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

export const UnitTitle = styled(Typography)`
  width: 175px;
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  font-size: 14px !important;
  line-height: 1.35 !important;
  text-overflow: ellipsis;
  text-align: center;
`;

export const UnitBody = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const UnitCartLogic = styled(Box)`
  height: 140px;
  width: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UnitPrice = styled(Typography)`
  color: green;
  font-size: 18px !important;
`;

export const UnitBodyHeader = styled(Box)`
  width: 190px;
  height: 20px;
  display: flex;
  justify-content: space-between;
`;

export const RemoveIcon = styled(CloseIcon)`
  cursor: pointer;
  color: gray;
`;

export const FieldWrapper = styled(Box)`
  padding: 20px;
`;

export const UnitBodyFooter = styled(Box)`
    padding-left: 80px;
    width: 190px;
    padding: 5px
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
`;

export const UnitSubtitle = styled(Typography)`
  font-size: 14px !important;
  line-height: 1.35 !important;
`;
