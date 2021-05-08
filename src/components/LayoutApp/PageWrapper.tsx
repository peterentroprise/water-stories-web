import { Box } from "@chakra-ui/react";

type PageWrapperProps = {};

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <Box maxW="container.md" w="full">
      {children}
    </Box>
  );
};
