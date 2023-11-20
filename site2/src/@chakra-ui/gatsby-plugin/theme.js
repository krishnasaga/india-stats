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
  components: {
    Heading: {
      baseStyle: {
        color: "#189AB4",
      },
    },
    Text: {
      baseStyle: {},
      variants: {
        primary: {
          color: "#05445E",
          fontWeight: 700,
          fontSize: "24",
        },
      },
    },
  },
};

export default extendTheme(theme); // or extendBaseTheme

export const baseTheme = {};
