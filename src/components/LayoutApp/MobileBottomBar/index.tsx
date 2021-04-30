import { Box } from "@chakra-ui/react";
import { BottomBar } from "./BottomBar";

type MobileBottomBarProps = {};

const MobileBottomBar: React.FC<MobileBottomBarProps> = () => {
  return (
    <Box display={{ sm: "block", md: "none" }}>
      <BottomBar />
    </Box>
  );
};

export default MobileBottomBar;
