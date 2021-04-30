import { useColorMode, Icon } from "@chakra-ui/react";
import MenuIcon from "@material-ui/icons/MenuOutlined";
import CloseIcon from "@material-ui/icons/CloseOutlined";

import { textColor } from "../../../constants";

type MobileMenuDrawerButtonProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const MobileMenuDrawerButton: React.FC<MobileMenuDrawerButtonProps> = ({
  isOpen,
}) => {
  const { colorMode } = useColorMode();
  return (
    <>
      {isOpen ? (
        <Icon color={textColor[colorMode]} as={CloseIcon} w="20px" h="20px" />
      ) : (
        <Icon color={textColor[colorMode]} as={MenuIcon} w="20px" h="20px" />
      )}
    </>
  );
};
