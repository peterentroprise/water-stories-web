import { Flex } from "@chakra-ui/react";

import { Background } from "./Background";
type RootWrapperProps = {};

export const RootWrapper: React.FC<RootWrapperProps> = ({ children }) => {
  return (
    <Flex
      height="100vh"
      flexDirection="column"
      overflow="hidden"
      sx={{
        "--sidebar-width": "256px",
      }}
    >
      <Background />
      {children}
    </Flex>
  );
};
