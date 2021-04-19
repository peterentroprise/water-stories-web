import { Box } from "@chakra-ui/react";

import { Background } from "./Background";
type RootWrapperProps = {};

export const RootWrapper: React.FC<RootWrapperProps> = ({ children }) => {
  return (
    <Box>
      <Background />
      {children}
    </Box>
  );
};
