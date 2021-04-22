import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useColorMode,
} from "@chakra-ui/react";

import { SideBar } from "../SideBar";

import { bgColor, textColor } from "../constants";

type MobileMenuDrawerProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const MobileMenuDrawer: React.FC<MobileMenuDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const { colorMode } = useColorMode();
  return (
    <Drawer
      size="xs"
      placement="left"
      isOpen={isOpen}
      blockScrollOnMount={false}
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent
        bg={bgColor[colorMode]}
        color={textColor[colorMode]}
        shadow="none"
        position="relative"
        maxW="64"
        pr="1rem"
      >
        <SideBar />
      </DrawerContent>
    </Drawer>
  );
};
