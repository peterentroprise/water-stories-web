import * as React from "react";
import { Box, Flex, HStack, Heading, useColorMode } from "@chakra-ui/react";

import { MainNavBreadcrumbs } from "./MainNavBreadcrumbs";
type AppBarProps = {};

export const BottomNavBar: React.FC<AppBarProps> = () => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "rgba( 255, 255, 255, 0.5 )",
    dark: "rgba( 0, 0, 0, 0.25 )",
  };

  const color = { light: "black", dark: "white" };
  return (
    <HStack
      display="flex"
      flex="1"
      bottom="0"
      left="0"
      paddingLeft="2rem"
      position="fixed"
      height="4rem"
      width="full"
      align="center"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      sx={{
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      }}
    >
      <Box display={{ md: "block" }}>
        <Heading size="md" fontWeight="extrabold">
          Water Stories
        </Heading>
      </Box>
      <Flex py="1rem" justify="space-between" align="center" px="1rem">
        <Flex align="center" minH=".5rem">
          <MainNavBreadcrumbs />
        </Flex>
      </Flex>
    </HStack>
  );
};
