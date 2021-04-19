import { Box } from "@chakra-ui/react";

type BackgroundProps = {};

export const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      w="full"
      h="100vh"
      bg="yellow"
      zIndex={-1}
    >
      {children}
    </Box>
  );
};
