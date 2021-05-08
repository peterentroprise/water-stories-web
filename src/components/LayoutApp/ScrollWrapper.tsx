import { Box, Flex, useColorModeValue, useColorMode } from "@chakra-ui/react";
import { bgColor } from "../../constants";
import { useMobileMenuState } from "../../hooks/useMobileMenuState";

type ScrollWrapperProps = {};

export const ScrollWrapper: React.FC<ScrollWrapperProps> = ({ children }) => {
  const { colorMode } = useColorMode();
  const { mobileMenuIsOpen } = useMobileMenuState();
  return (
    <Box
      flex="1"
      p={{ base: "0", md: "6" }}
      marginStart={{ md: "var(--sidebar-width)" }}
      position="relative"
      left={mobileMenuIsOpen ? "var(--sidebar-width)" : "0"}
      transition="left 0.2s"
    >
      <Box
        maxW="2560px"
        bg={useColorModeValue("white", "gray.700")}
        height="100%"
        rounded={{ md: "lg" }}
      >
        <Flex
          id="scrollTarget"
          flexDirection="column"
          align="flex-start"
          height="100vh"
          width="full"
          overflowY="auto"
          overflowX="hidden"
          px={["0rem", "0rem", "2rem"]}
          sx={{
            "&::-webkit-scrollbar-track": {
              bg: bgColor[colorMode],
              backdropFilter: "blur( 8px )",
              WebkitBackdropFilter: "blur( 8px )",
            },
            "&::-webkit-scrollbar": {
              width: "none",
              display: "none",
            },
            "&::-webkit-scrollbar-thumb": {
              bg: useColorModeValue("purple.400", "gray.700"),
              borderRadius: "xl",
            },
          }}
        >
          {children}
        </Flex>
      </Box>
    </Box>
  );
};
