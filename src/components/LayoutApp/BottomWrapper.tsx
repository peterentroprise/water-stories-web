import { Flex } from "@chakra-ui/react";

type BottomWrapperProps = {};

export const BottomWrapper: React.FC<BottomWrapperProps> = ({ children }) => {
  return <Flex flexDirection="row">{children}</Flex>;
};
