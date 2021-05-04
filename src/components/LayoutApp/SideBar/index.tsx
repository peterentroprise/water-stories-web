import { Box } from "@chakra-ui/react";
import { SideBarContent } from "./SideBarContent";

type DesktopSideBarProps = {};

const SideBar: React.FC<DesktopSideBarProps> = () => {
  return (
    <Box
      as="nav"
      display="block"
      flex="1"
      width="var(--sidebar-width)"
      left="0"
      py="1rem"
      pr="1rem"
      position="fixed"
    >
      <SideBarContent />
    </Box>
  );
};

export default SideBar;
