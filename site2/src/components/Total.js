import React, { Suspense, useEffect, useRef } from "react";

import {
  Box,
  Grid,
  GridItem,
  Heading,
  ThemeProvider,
  theme,
} from "@chakra-ui/react";
import AnimatedNumber from "react-animated-number";

const Total = () => {
  return (
    <Box textAlign={"center"} p={"100px"}>
      <Heading size={"4xl"}>
        <AnimatedNumber
          component="text"
          value={14559}
          style={{
            transition: "5s ease-out",
            fontSize: 100,
            background: "#fefefe",
          }}
          duration={2000}
          formatValue={(n) => n.toFixed(0)}
        />
      </Heading>
    </Box>
  );
};

export default Total;
