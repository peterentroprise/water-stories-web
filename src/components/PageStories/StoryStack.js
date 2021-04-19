import { VStack } from "@chakra-ui/react";

const StoryStack = ({ children }) => {
  return (
    <VStack
      maxW="container.md"
      pr={{ sm: "2rem" }}
      spacing="1rem"
      align="stretch"
    >
      {children}
    </VStack>
  );
};

export default StoryStack;
