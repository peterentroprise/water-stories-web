import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";

import Link from "../../CompLink";
import { textColor } from "../constants";

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
    <Box flex="1" as="button" h="56px" pt="8px" pb="8" pl="12px" pr="12px">
      <Link href={href}>
        <Flex
          flexDirection="column"
          align="center"
          h="40px"
          color={textColor[colorMode]}
        >
          <Icon as={icon} h="20px" w="20px" />
          <Text h="16px" fontSize="14px" fontWeight="semibold">
            {children}
          </Text>
        </Flex>
      </Link>
    </Box>
  );
};
