import { Flex } from "@chakra-ui/react";

type TopWrapperProps = {};

export const TopWrapper: React.FC<TopWrapperProps> = ({ children }) => {
  return <Flex flexDirection="row">{children}</Flex>;
};
