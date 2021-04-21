import { Box, Flex, useColorMode } from "@chakra-ui/react";

import { bgColor, textColor } from "./constants";

type PageWrapperProps = {};

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <Flex flexDirection="column" pt="10rem" align="flex-end">
      <Box
        flex={1}
        maxW="container.sm"
        // px="1rem"
        borderTopRadius="2xl"
        bg={bgColor[colorMode]}
        color={textColor[colorMode]}
        sx={{
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 8px )",
          WebkitBackdropFilter: "blur( 8px )",
        }}
      >
        {children}
      </Box>
    </Flex>
  );
};
