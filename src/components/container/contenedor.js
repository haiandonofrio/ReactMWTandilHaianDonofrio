import { Box, styled } from "@mui/material";

export const Contenedor = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: 2,
  flexWrap: "wrap",
  flexDirection: "row",
  // backgroundColor: "red",
  [theme.breakpoints.down(470)]: {
    maxWidth: "800px",
    flexDirection: "column"
  }
}));

export const Centrado = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: 2,
  flexWrap: "wrap",
  flexDirection: "row",
  paddingBottom: 2,
}));

export const FlexCenterCol = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: 2,
  flexWrap: "wrap",
  flexDirection: "column",
  paddingBottom: 2,
}));
