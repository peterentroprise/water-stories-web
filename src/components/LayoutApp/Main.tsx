import * as React from "react";
import { Box, Flex } from "@chakra-ui/react";

type MainProps = {
  isOpen: Boolean;
};

export const Main: React.FC<MainProps> = ({ children, isOpen }) => {
  return (
    <Box
      flex="1"
      marginTop="1rem"
      marginStart={{ sm: "var(--sidebar-width)" }}
      position="relative"
      left={isOpen ? "var(--sidebar-width)" : "0"}
      transition="left 0.2s"
    >
      <Box height="full" rounded={{ sm: "2xl" }}>
        <Flex height="full" direction="column">
          {children}
        </Flex>
      </Box>
    </Box>
  );
};
