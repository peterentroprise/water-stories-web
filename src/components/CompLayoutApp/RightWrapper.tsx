import { Box, useColorModeValue } from "@chakra-ui/react";

type RightWrapperProps = {};

export const RightWrapper: React.FC<RightWrapperProps> = ({ children }) => {
  return (
    <Box
      id="scrollTarget"
      height="100vh"
      overflowY="auto"
      sx={{
        "&::-webkit-scrollbar-track": {
          bg: "transparent",
        },
        "&::-webkit-scrollbar": {
          width: ".25rem",
        },
        "&::-webkit-scrollbar-thumb": {
          bg: useColorModeValue("purple.900", "gray.700"),
          borderRadius: "xl",
        },
      }}
    >
      {children}
    </Box>
  );
};
