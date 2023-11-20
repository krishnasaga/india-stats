// src/@chakra-ui/gatsby-plugin/theme.js
import { extendTheme } from "@chakra-ui/react";
const theme = {
  fonts: {
    heading: `'inter', sans-serif`,
    body: `'inter', sans-serif`,
  },
  colors: {
    primary: "red",
  },
  components
  : {
    Button: {
      baseStyle: {
        color: "red",
        fontSize: "64px",
      },
      variants: {},
      defaultProps: {
        size: "",
        variant: "",
        colorScheme: "",
      },
    },
    Text: {
      baseStyle: {
        color: "red",
        fontSize: "64px",
      },
      variants: {
        primary: {
          color: "red",
          fontSize: "64px",
        },
      },
      defaultProps: {
        size: "",
        variant: "primary",
        colorScheme: "",
      },
    },
  },
};

export default extendTheme(theme); // or extendBaseTheme

export const baseTheme = {};
