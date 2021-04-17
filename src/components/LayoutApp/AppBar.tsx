import * as React from "react";
import { Box, Flex, HStack, Heading, useColorMode } from "@chakra-ui/react";

import { SidebarAccount } from "./SidebarAccount";
import { MainNavBreadcrumbs } from "./MainNavBreadcrumbs";

type AppBarProps = {};

export const AppBar: React.FC<AppBarProps> = () => {
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
      top="0"
      left="0"
      paddingLeft="2rem"
      position="fixed"
      height="4rem"
      width="full"
      align="center"
      color={color[colorMode]}
      bg={bgColor[colorMode]}
      // sx={{
      //   boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      // }}
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
      <Flex flexGrow={1} />
      <Box pr="1rem">
        <SidebarAccount />
      </Box>
    </HStack>
  );
};
