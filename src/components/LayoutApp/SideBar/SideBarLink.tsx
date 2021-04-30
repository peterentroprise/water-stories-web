import * as React from "react";
import {
  Box,
  Flex,
  BoxProps,
  HStack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { HiX } from "react-icons/hi";

import CompLink from "../../CompLink";

interface SideBarLinkProps extends BoxProps {
  icon?: React.ReactElement;
  href?: String;
}

export const SideBarLink = (props: SideBarLinkProps) => {
  const { children, icon = <HiX />, href = "/" } = props;
  return (
    <CompLink href={href}>
      <Flex
        align="center"
        height="40px"
        py=".5rem"
        pl={["1rem", "2rem"]}
        borderLeftRadius="none"
        borderRightRadius="3xl"
        cursor="pointer"
        _hover={{
          color: mode("white", "white"),
          bg: mode("purple.400", "gray.600"),
        }}
      >
        <HStack align="center">
          <Box>{icon}</Box>
          <Text fontSize="sm" fontWeight="semibold">
            {children}
          </Text>
        </HStack>
      </Flex>
    </CompLink>
  );
};
