import { VStack } from "@chakra-ui/react";

const StoryStack = ({ children }) => {
  return (
    <VStack maxW="container.md" spacing="1rem" align="stretch">
      {children}
    </VStack>
  );
};

export default StoryStack;
