import { SxProps, Theme } from "@mui/material";

export const sxButtonStyle: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  borderRadius: "15px",
  boxShadow: "0px 10.0979px 10.0979px rgba(255, 39, 0, 0.2)",
  cursor: "pointer",
  textTransform: "uppercase",
  outline: "none",
  border: "none",
  height: "5.0vh",
  fontSize: 16,
  fontweight: 'bold',
};

export const sxButtonMaior: SxProps<Theme> = {
  display: 'flex',
  margin: 'auto',
  alignItems: "center",
  color: "#fff",
  backgroundColor: "#FF2700",
  borderRadius: "15px",
  boxShadow: "0px 10.0979px 10.0979px rgba(255, 39, 0, 0.2)",
  cursor: "auto",
  fontWeight: 'bold',
  texttransform: "uppercase",
  outline: "none",
  border: "none",
  height: "5.0vh",
  width: "40%",
};

export const sxListStyle: SxProps<Theme> = {
  fontWeight: "bold",
  textDecoration: "none",
  paddingRight: ".5em",
  color: "#111820",
  textTransform: "none",
};
