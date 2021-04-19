import { Box, Text } from "@chakra-ui/react";
type AppBarProps = {};

export const AppBar: React.FC<AppBarProps> = () => {
  return (
    <Box
      w="full"
      height="4rem"
      position="fixed"
      top="0rem"
      left="0rem"
      p="1rem"
      bg="blue"
    >
      <Text>AppBar</Text>
    </Box>
  );
};
