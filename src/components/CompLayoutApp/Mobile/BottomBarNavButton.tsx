import { Box, Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";

import Link from "../../CompLink";

type BottomBarNavButtonProps = {
  href: string;
  icon: React.ReactNode;
};

export const BottomBarNavButton: React.FC<BottomBarNavButtonProps> = ({
  children,
  href,
  icon,
}) => {
  return (
    <Box flex="1" as="button" h="56px" pt="6px" pb="10px" pl="12px" pr="12px">
      <Link href={href}>
        <Box h="40px">
          <Icon as={icon} h="20px" w="20px" />
          <Text h="16px" fontSize="14px">
            {children}
          </Text>
        </Box>
      </Link>
    </Box>
  );
};
