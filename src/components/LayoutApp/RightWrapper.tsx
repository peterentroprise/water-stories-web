import { Flex, useColorModeValue, useColorMode } from "@chakra-ui/react";
import { bgColor } from "../../constants";

type RightWrapperProps = {};

export const RightWrapper: React.FC<RightWrapperProps> = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
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
  );
};
