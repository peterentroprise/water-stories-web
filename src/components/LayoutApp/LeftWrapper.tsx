import { Box } from "@chakra-ui/react";

type LeftWrapperProps = {};

export const LeftWrapper: React.FC<LeftWrapperProps> = ({ children }) => {
  return (
    <Box mt="3.5rem" width="var(--sidebar-width)">
      {children}
    </Box>
  );
};
