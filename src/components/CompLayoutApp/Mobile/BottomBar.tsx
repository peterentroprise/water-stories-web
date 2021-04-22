import { Button, Flex, useColorMode } from "@chakra-ui/react";

import { useMobileMenuState } from "../../../hooks/useMobileMenuState";
import { MobileMenuDrawer } from "./MobileMenuDrawer";
import { MobileMenuDrawerButton } from "./MobileMenuDrawerButton";
import { textColor, bgColor } from "../constants";

import Link from "../../CompLink";

type BottomBarProps = {};

export const BottomBar: React.FC<BottomBarProps> = () => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useMobileMenuState();
  return (
    <Flex
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
        <MobileMenuDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        <MobileMenuDrawerButton
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        />
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
