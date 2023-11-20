import React, { useState } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
  Grid,
} from "@chakra-ui/react";

export const PagesList = () => {
  const {
    pages: { nodes },
  } = useStaticQuery(graphql`
    {
      pages: allSitePage {
        nodes {
          path
        }
      }
    }
  `);

  return (
    <Grid
      gridTemplateColumns={[
        "1fr",
        "1fr 1fr",
        "1fr 1fr 1fr 1fr",
        "1fr 1fr 1fr 1fr",
      ]}
    >
      {nodes.map((page, key) => (
        <PageCard key={key} page={page} />
      ))}
    </Grid>
  );
};

export const PageCard = ({ page }) => {
  const [liked, setLiked] = useState(false);

  return (
    <Link to={page.path}>
      <Center py={6}>
        <Box
          w="xs"
          rounded={"sm"}
          my={5}
          mx={[0, 5]}
          overflow={"hidden"}
          bg="white"
          border={"1px"}
          borderColor="black"
          boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}
        >
          <Box h={"200px"} borderBottom={"1px"} borderColor="black">
            <Img
              src={page.link}
              roundedTop={"sm"}
              objectFit="cover"
              h="full"
              w="full"
              alt={"Blog Image"}
            />
          </Box>
          <Box p={4}>
            <Box
              bg="black"
              display={"inline-block"}
              px={2}
              py={1}
              color="white"
              mb={2}
            >
              <Text fontSize={"xs"} fontWeight="medium">
                React
              </Text>
            </Box>
            <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
              React v18.0
            </Heading>
            <Text color={"gray.500"} noOfLines={2}>
              In this post, we will give an overview of what is new in React 18,
              and what it means for the future.
            </Text>
          </Box>
          <HStack borderTop={"1px"} color="black">
            <Flex
              p={4}
              alignItems="center"
              justifyContent={"space-between"}
              roundedBottom={"sm"}
              cursor={"pointer"}
              w="full"
            >
              <Text fontSize={"md"} fontWeight={"semibold"}>
                View more
              </Text>
            </Flex>
            <Flex
              p={4}
              alignItems="center"
              justifyContent={"space-between"}
              roundedBottom={"sm"}
              borderLeft={"1px"}
              cursor="pointer"
              onClick={() => setLiked(!liked)}
            ></Flex>
          </HStack>
        </Box>
      </Center>
    </Link>
  );
};
