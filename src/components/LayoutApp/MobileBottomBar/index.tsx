import { Box } from "@chakra-ui/react";
import { BottomBar } from "./BottomBar";
import { MobileMenuDrawer } from "./MobileMenuDrawer";

type MobileBottomBarProps = {};

const MobileBottomBar: React.FC<MobileBottomBarProps> = () => {
  return (
    <Box display={{ sm: "block", md: "none" }}>
      <MobileMenuDrawer />
      <BottomBar />
    </Box>
  );
};

export default MobileBottomBar;
