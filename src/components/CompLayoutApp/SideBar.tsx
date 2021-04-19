import { Box, Text } from "@chakra-ui/react";
type MainProps = {};

export const SideBar: React.FC<MainProps> = () => {
  return (
    <Box
      position="fixed"
      left={0}
      top={0}
      w="300px"
      p="1rem"
      h="full"
      mt="4rem"
      bg="red"
    >
      <Text>Sidebar</Text>
    </Box>
  );
};
