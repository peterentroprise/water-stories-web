import { Flex, HStack, Heading, useColorMode } from "@chakra-ui/react";

import { AccountButton } from "./AccountButton";
import { NavBreadcrumbs } from "./NavBreadcrumbs";
import { useScrollPosition } from "../../hooks/useScrollPosition";

type AppBarProps = {};

export const AppBar: React.FC<AppBarProps> = () => {
  const { colorMode } = useColorMode();

  const scrollPos = useScrollPosition();

  const bgColor = {
    light: "rgba( 255, 255, 255, 0.7 )",
    dark: "rgba( 0, 0, 0, 0.25 )",
  };
  const isScrolledTop = scrollPos == 0;

  const color = { light: "black", dark: "white" };
  return (
    <HStack
      display="flex"
      flex="1"
      top="0"
      left="0"
      px={[".5rem", "2rem", "2rem", "2rem"]}
      position="fixed"
      height="4rem"
      width="full"
      align="center"
      color={color[colorMode]}
      bg={isScrolledTop ? "none" : bgColor[colorMode]}
      sx={{
        transition: isScrolledTop ? "0.3s" : "0.5s",
        boxShadow: isScrolledTop
          ? "none"
          : "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: isScrolledTop ? "none" : "blur( 8px )",
        WebkitBackdropFilter: isScrolledTop ? "none" : "blur( 8px )",
        zIndex: 1,
      }}
    >
      <Heading
        pr="1rem"
        display={["none", "block"]}
        size="md"
        fontWeight="extrabold"
      >
        Water Stories
      </Heading>
      <NavBreadcrumbs />
      <Flex flexGrow={1} />
      <AccountButton />
    </HStack>
  );
};
