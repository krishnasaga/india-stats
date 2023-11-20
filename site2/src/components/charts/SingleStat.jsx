import React from "react";

import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import AnimatedNumber from "react-animated-number";

const SingleStat = ({
  unit,
  value = 100,
  size = 4,
  title = "",
  description,
  prefix,
  format,
  color,
}) => {
  return (
    <Box textAlign={"center"}>
      <Flex justifyContent={"center"} alignItems={"baseline"}>
        <Text fontSize={size * 25} fontWeight={"bold"} color={color}>
          {prefix}
        </Text>
        <Heading size={`sm`}>
          <AnimatedNumber
            component="text"
            value={value}
            style={{
              transition: "5s ease-out",
              fontSize: size * 25,
              color: color,
            }}
            duration={2000}
            formatValue={(n) =>
              new Intl.NumberFormat("en-IN").format(n.toFixed(0))
            }
          />
        </Heading>
        <Text fontSize={"24px"} fontWeight={"bold"} color={color}>
          {unit}
        </Text>
      </Flex>
      <Heading size={`${size / 4 === 1 ? "" : size / 4}xl`} my={"16px"}>
        {title}
      </Heading>
      <Text size={"md"}>{description}</Text>
    </Box>
  );
};

export default SingleStat;
