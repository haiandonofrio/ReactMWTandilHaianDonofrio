import { Box, Button, styled } from "@mui/material";

export const Contenedor = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: 2,
  flexWrap: "wrap",
  flexDirection: "row",
  [theme.breakpoints.down(470)]: {
    maxWidth: "700px",
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
  textAlign: "center",
  alignItems: "center",
}));

export const ColorButton = styled(Button)(({ theme }) => ({
  fontSize: '1.2em',
  backgroundColor: "white",
  '&:hover': {
    backgroundColor: '#9ca5d2',
    color: '#fff'
  },
}));
