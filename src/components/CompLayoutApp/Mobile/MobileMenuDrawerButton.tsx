import { Box, Icon } from "@chakra-ui/react";
import { HiMenuAlt2, HiX } from "react-icons/hi";

type MobileMenuDrawerButtonProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const MobileMenuDrawerButton: React.FC<MobileMenuDrawerButtonProps> = ({
  isOpen,
}) => {
  return (
    <>
      {isOpen ? (
        <Icon as={HiX} w="24px" h="24px" />
      ) : (
        <Icon as={HiMenuAlt2} w="24px" h="24px" />
      )}
    </>
  );
};
