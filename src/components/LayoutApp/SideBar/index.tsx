import { Box, useBreakpointValue } from "@chakra-ui/react";
import { SideBarContent } from "./SideBarContent";

type DesktopSideBarProps = {};

const SideBar: React.FC<DesktopSideBarProps> = () => {
  const showSideBarContent = useBreakpointValue({
    base: false,
    md: true,
  });

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
      {console.log(showSideBarContent)}
      {showSideBarContent && <SideBarContent />}
    </Box>
  );
};

export default SideBar;
