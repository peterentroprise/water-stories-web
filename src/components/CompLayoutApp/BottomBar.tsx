import { Box, Text } from "@chakra-ui/react";
type BottomBarProps = {};

export const BottomBar: React.FC<BottomBarProps> = () => {
  return (
    <Box
      w="full"
      height="4rem"
      position="fixed"
      bottom="0rem"
      left="0rem"
      p="1rem"
      bg="green"
    >
      <Text>BottomBar</Text>
    </Box>
  );
};
