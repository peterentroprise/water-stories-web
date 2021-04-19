import { Flex } from "@chakra-ui/react";

type MiddleWrapperProps = {};

export const MiddleWrapper: React.FC<MiddleWrapperProps> = ({ children }) => {
  return <Flex my="5rem">{children}</Flex>;
};
