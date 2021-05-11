import { useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Flex,
  BoxProps,
  HStack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { HiX } from "react-icons/hi";
import { useMobileMenuState } from "../../../hooks/useMobileMenuState";

import CompLink from "../../CompLink";

interface SideBarLinkProps extends BoxProps {
  icon?: React.ReactElement;
  href?: String;
}

export const SideBarLink = (props: SideBarLinkProps) => {
  const { children, icon = <HiX />, href = "/" } = props;
  const router = useRouter();
  const { closeMobileMenu } = useMobileMenuState();

  const [matchesUrl] = useState(router.pathname === href);

  return (
    <CompLink href={href}>
      <Flex
        as="button"
        w="full"
        onClick={closeMobileMenu}
        align="center"
        height="40px"
        py=".5rem"
        // pl={["1rem", "2rem"]}
        borderLeftRadius="none"
        borderRightRadius="3xl"
        cursor="pointer"
        bg={(matchesUrl && mode("purple.50", "gray.600")) || "none"}
      >
        <Box
          bg={(matchesUrl && "purple.500") || "none"}
          w="4px"
          h="full"
          borderRightRadius="1rem"
          mr=".75rem"
        />
        <HStack align="center">
          <Box color={(matchesUrl && "purple.500") || "normal"}>{icon}</Box>
          <Text
            fontSize="sm"
            color={(matchesUrl && "purple.500") || "normal"}
            fontWeight={(matchesUrl && "bold") || "normal"}
          >
            {children}
          </Text>
        </HStack>
      </Flex>
    </CompLink>
  );
};
