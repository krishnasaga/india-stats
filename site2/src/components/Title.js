import React, { Suspense, useEffect, useRef } from "react";

import {
  Box,
  Grid,
  GridItem,
  Heading,
  ThemeProvider,
  theme,
} from "@chakra-ui/react";

const Title = () => {
  return (
    <Box textAlign={"center"}>
      <Heading size={"4xl"}>Road Accidents in India</Heading>
    </Box>
  );
};

export default Title;
