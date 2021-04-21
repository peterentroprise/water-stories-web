import { Button, Flex, useColorMode } from "@chakra-ui/react";

import { DrawerButton } from "./DrawerButton";
import { textColor, bgColor } from "./constants";

import Link from "../CompLink";

type BottomBarProps = {
  isOpen?: boolean;
  toggle?: () => void;
};

export const BottomBar: React.FC<BottomBarProps> = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      // display={["flex", "none", "none", "none"]}
      position="fixed"
      bottom="0rem"
      height="3.5rem"
      w="full"
      alignItems="center"
      transition="left 0.2s"
      bg={bgColor[colorMode]}
      color={textColor[colorMode]}
      borderTopRadius="2xl"
      sx={{
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 8px )",
        WebkitBackdropFilter: "blur( 8px )",
      }}
    >
      <Flex
        align="center"
        minH=".5rem"
        height="full"
        width="full"
        justifyContent="space-between"
        p="1rem"
      >
        <DrawerButton />
        <Button as={Link} href="/app/browse" variant="ghost" fontWeight="bold">
          Browse
        </Button>
        <Button as={Link} href="/app/explore" variant="ghost" fontWeight="bold">
          Explore
        </Button>
        <Button as={Link} href="/app/search" variant="ghost" fontWeight="bold">
          Search
        </Button>
      </Flex>
    </Flex>
  );
};
