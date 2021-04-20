import * as React from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";

type WrapperProps = {};

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Flex
      overflow="hidden"
      marginTop="4rem"
      sx={{
        "--sidebar-width": "256px",
        "&::-webkit-scrollbar": {
          width: ".25rem",
        },
        "&::-webkit-scrollbar-track": {
          bg: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          bg: useColorModeValue("purple.900", "gray.700"),
          borderRadius: "xl",
        },
      }}
    >
      {children}
    </Flex>
  );
};
