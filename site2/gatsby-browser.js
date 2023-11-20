// gatsby-browser.js
import * as React from "react";
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import { theme } from "./src/theme"; // Import your custom theme

export const wrapRootElement = ({ element }) => (
  <ChakraProvider theme={extendTheme(theme)}>
    <CSSReset />
    {element}
  </ChakraProvider>
);
