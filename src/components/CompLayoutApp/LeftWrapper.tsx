import { Box } from "@chakra-ui/react";

type LeftWrapperProps = {};

export const LeftWrapper: React.FC<LeftWrapperProps> = ({ children }) => {
  return <Box width="var(--sidebar-width)">{children}</Box>;
};
