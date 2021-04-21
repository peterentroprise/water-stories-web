import * as React from "react";
import { Box } from "@chakra-ui/react";
import { HiMenuAlt2, HiX } from "react-icons/hi";

type DrawerButtonProps = {
  onClick?: () => void;
  isOpen?: boolean;
};

export const DrawerButton: React.FC<DrawerButtonProps> = ({
  onClick,
  isOpen,
}) => {
  return (
    <Box
      as="button"
      type="button"
      rounded="md"
      p=".1rem"
      fontSize="xl"
      onClick={onClick}
    >
      <Box srOnly>{isOpen ? "Close Menu" : "Open Menu"}</Box>
      {isOpen ? <HiX /> : <HiMenuAlt2 />}
    </Box>
  );
};
