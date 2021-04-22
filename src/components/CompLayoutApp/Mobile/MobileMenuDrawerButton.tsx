import { IconButton } from "@chakra-ui/react";
import { HiMenuAlt2, HiX } from "react-icons/hi";

type MobileMenuDrawerButtonProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const MobileMenuDrawerButton: React.FC<MobileMenuDrawerButtonProps> = ({
  isOpen,
  onOpen,
  onClose,
}) => {
  return (
    <>
      {isOpen ? (
        <IconButton
          variant="ghost"
          onClick={onClose}
          aria-label="Menu"
          icon={<HiX />}
        />
      ) : (
        <IconButton
          variant="ghost"
          onClick={onOpen}
          aria-label="Menu"
          icon={<HiMenuAlt2 />}
        />
      )}
    </>
  );
};
