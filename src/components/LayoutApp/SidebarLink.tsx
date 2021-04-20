import * as React from "react";
import {
  Box,
  BoxProps,
  HStack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { HiX } from "react-icons/hi";

import CompLink from "../CompLink";

interface SidebarLinkProps extends BoxProps {
  icon?: React.ReactElement;
  href?: String;
}

export const SidebarLink = (props: SidebarLinkProps) => {
  const { children, icon = <HiX />, href = "/" } = props;
  return (
    <CompLink href={href}>
      <Box
        display="block"
        py=".5rem"
        pl={["1rem", "2rem"]}
        borderLeftRadius="none"
        borderRightRadius="3xl"
        cursor="pointer"
        _hover={{
          color: mode("white", "white"),
          bg: mode("purple.900", "gray.600"),
        }}
      >
        <HStack>
          <Box>{icon}</Box>
          <Text fontSize="sm" fontWeight="semibold">
            {children}
          </Text>
        </HStack>
      </Box>
    </CompLink>
  );
};
