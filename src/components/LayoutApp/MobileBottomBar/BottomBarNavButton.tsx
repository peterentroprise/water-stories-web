import { useState } from "react";
import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Icon } from "@chakra-ui/react";

import Link from "../../CompLink";
import { primaryColor } from "../../../constants";

type BottomBarNavButtonProps = {
  href: string;
  icon: any;
  onClick: any;
};

export const BottomBarNavButton: React.FC<BottomBarNavButtonProps> = ({
  children,
  href,
  onClick,
  icon,
}) => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const [matchesUrl] = useState(router.pathname === href);
  return (
    <Box
      flex="1"
      as="button"
      h="full"
      w="full"
      transition="color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,padding-top 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
    >
      {(!onClick && (
        <Link href={href} h="full">
          <Flex flexDirection="column" h="full" justifyContent="flex-end">
            <Flex
              flexDirection="column"
              align="center"
              h="40px"
              mb="6px"
              color={(matchesUrl && primaryColor[colorMode]) || "current"}
              fontWeight={(matchesUrl && "bold") || "semibold"}
            >
              <Icon as={icon} h="20px" w="20px" />
              <Text h="16px" fontSize="14px">
                {children}
              </Text>
            </Flex>
            <Box
              mx=".5rem"
              h="4px"
              borderTopRadius="1rem"
              bg={(matchesUrl && primaryColor[colorMode]) || "none"}
            />
          </Flex>
        </Link>
      )) || (
        <Flex
          flexDirection="column"
          h="full"
          justifyContent="flex-end"
          onClick={onClick}
        >
          <Flex
            flexDirection="column"
            align="center"
            h="40px"
            mb="6px"
            color={(matchesUrl && primaryColor[colorMode]) || "current"}
            fontWeight={(matchesUrl && "bold") || "semibold"}
          >
            <Icon as={icon} h="20px" w="20px" />
            <Text h="16px" fontSize="14px">
              {children}
            </Text>
          </Flex>
          <Box
            h="4px"
            width="full"
            borderTopRadius="1rem"
            bg={(matchesUrl && primaryColor[colorMode]) || "none"}
          />
        </Flex>
      )}
    </Box>
  );
};
