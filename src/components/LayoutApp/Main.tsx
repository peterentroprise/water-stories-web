import * as React from "react";
import {
  Box,
  Flex,
  useColorMode,
  useColorModeValue as mode,
} from "@chakra-ui/react";

import { useMobileMenuState } from "./useMobileMenuState";

type MainProps = {};

export const Main: React.FC<MainProps> = ({ children }) => {
  const { isOpen } = useMobileMenuState();
  const { colorMode } = useColorMode();

  const color = { light: "black", dark: "white" };

  return (
    <Box
      flex="1"
      pb={{ md: "1rem" }}
      marginTop={{ sm: "4rem" }}
      marginStart={{ sm: "var(--sidebar-width)" }}
      marginEnd={{ xl: "var(--sidebar-width)" }}
      position="relative"
      left={isOpen ? "var(--sidebar-width)" : "0"}
      transition="left 0.2s"
    >
      <Box
        height="100%"
        rounded={{ sm: "2xl" }}
        bg="none"
        color={color[colorMode]}
      >
        <Flex
          height="full"
          direction="column"
          flex="1"
          px="1rem"
          overflowY="auto"
          sx={{
            "&::-webkit-scrollbar-track": {
              bg: "transparent",
            },
            "&::-webkit-scrollbar": {
              width: ".25rem",
            },
            "&::-webkit-scrollbar-thumb": {
              bg: mode("gray.500", "gray.700"),
              borderRadius: "xl",
            },
          }}
        >
          <Box flex="1">{children}</Box>
        </Flex>
      </Box>
    </Box>
  );
};
