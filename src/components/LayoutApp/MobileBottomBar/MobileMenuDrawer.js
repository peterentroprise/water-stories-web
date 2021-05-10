import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useColorMode,
} from "@chakra-ui/react";

import { SideBarContent } from "../SideBar/SideBarContent";

import { bgColor, textColor } from "../../../constants";
import { useMobileMenuState } from "../../../hooks/useMobileMenuState";

export const MobileMenuDrawer = () => {
  const { colorMode } = useColorMode();
  const { mobileMenuIsOpen, closeMobileMenu } = useMobileMenuState();
  return (
    <Drawer
      size="xs"
      placement="left"
      isOpen={mobileMenuIsOpen}
      blockScrollOnMount={false}
      onClose={closeMobileMenu}
    >
      <DrawerOverlay />
      <DrawerContent
        marginTop="4rem"
        borderTopRightRadius="1rem"
        bg={bgColor[colorMode]}
        color={textColor[colorMode]}
        shadow="none"
        position="relative"
        maxW="64"
        pr="1rem"
      >
        <SideBarContent />
      </DrawerContent>
    </Drawer>
  );
};
