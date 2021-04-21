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

interface SideBarLinkProps extends BoxProps {
  icon?: React.ReactElement;
  href?: String;
}

export const SideBarLink = (props: SideBarLinkProps) => {
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
          bg: mode("purple.400", "gray.600"),
        }}
      >
        <HStack>
          <Box>{icon}</Box>
          <Text fontSize="sm" fontWeight="bold">
            {children}
          </Text>
        </HStack>
      </Box>
    </CompLink>
  );
};
