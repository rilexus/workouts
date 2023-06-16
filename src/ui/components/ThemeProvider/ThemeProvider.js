import React from "react";
import { ThemeProvider } from "styled-components";
import { colors } from "ui/css/colors";

const theme = { colors };

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
