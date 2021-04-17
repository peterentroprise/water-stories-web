import { Box, Flex, HStack, Heading, useColorMode } from "@chakra-ui/react";

import { SidebarAccount } from "./SidebarAccount";
import { MainNavBreadcrumbs } from "./MainNavBreadcrumbs";
import useScrollPosition from "../../hooks/useScrollPosition";

type AppBarProps = {};

export const AppBar: React.FC<AppBarProps> = () => {
  const { colorMode } = useColorMode();

  const scrollPos = useScrollPosition();

  const bgColor = {
    light: "rgba( 255, 255, 255, 0.7 )",
    dark: "rgba( 0, 0, 0, 0.25 )",
  };

  const color = { light: "black", dark: "white" };
  return (
    <HStack
      display="flex"
      flex="1"
      top="0"
      left="0"
      position="fixed"
      height="4rem"
      width="full"
      align="center"
      color={color[colorMode]}
      bg={bgColor[colorMode]}
      sx={{
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 4px )",
        WebkitBackdropFilter: "blur( 4px )",
        zIndex: 4,
      }}
    >
      {console.log(scrollPos)}
      <Box pl="2rem" display={["none", "block", "block", "block"]}>
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
