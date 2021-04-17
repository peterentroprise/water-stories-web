import * as React from "react";
import {
  ButtonGroup,
  Button,
  Flex,
  HStack,
  useColorMode,
} from "@chakra-ui/react";

import { MainMenuButton } from "./MainMenuButton";
import { useMobileMenuState } from "./useMobileMenuState";
type AppBarProps = {};

export const BottomNavBar: React.FC<AppBarProps> = () => {
  const { colorMode } = useColorMode();
  const { isOpen, toggle } = useMobileMenuState();

  const bgColor = {
    light: "rgba( 255, 255, 255, .9 )",
    dark: "rgba( 0, 0, 0, 0.25 )",
  };

  const color = { light: "black", dark: "white" };
  return (
    <HStack
      display={["flex", "none", "none", "none"]}
      flex="1"
      bottom="0"
      left="0"
      position="fixed"
      height="4rem"
      width="full"
      align="center"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      sx={{
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 4px )",
        WebkitBackdropFilter: "blur( 4px )",
        zIndex: 4,
      }}
    >
      <Flex py="1rem" justify="center" align="center" px="1rem">
        <Flex align="center" minH=".5rem">
          <ButtonGroup variant="outline">
            <MainMenuButton onClick={toggle} isOpen={isOpen} />
            <Button>Browse</Button>
            <Button>Explore</Button>
            <Button>Search</Button>
          </ButtonGroup>
        </Flex>
      </Flex>
    </HStack>
  );
};
