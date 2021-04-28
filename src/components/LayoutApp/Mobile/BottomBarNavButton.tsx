import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";

import Link from "../../CompLink";
import { primaryColor } from "../../../constants";

type BottomBarNavButtonProps = {
  href: string;
  icon: any;
};

export const BottomBarNavButton: React.FC<BottomBarNavButtonProps> = ({
  children,
  href,
  icon,
}) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      flex="1"
      as="button"
      h="full"
      w="full"
      py="12px"
      transition="color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,padding-top 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
      _hover={{
        color: primaryColor[colorMode],
        fontWeight: "bold",
      }}
      _focus={{
        color: primaryColor[colorMode],
        outline: "none",
        WebkitTapHighlightColor: "transparent",
        fontWeight: "bold",
      }}
      _active={{
        color: primaryColor[colorMode],
        WebkitTapHighlightColor: "transparent",
        fontWeight: "bold",
      }}
    >
      <Link href={href}>
        <Flex flexDirection="column" align="center" h="40px">
          <Icon as={icon} h="20px" w="20px" />
          <Text h="16px" fontSize="14px" fontWeight="semibold">
            {children}
          </Text>
        </Flex>
      </Link>
    </Box>
  );
};
