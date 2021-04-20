import { Box, Text } from "@chakra-ui/react";
import {
  HiOutlineGlobe,
  HiOutlineHome,
  HiOutlineBookOpen,
} from "react-icons/hi";
import { BiNetworkChart } from "react-icons/bi";
import { SideBarLink } from "./SideBarLink";
import DarkModeSwitch from "../CompDarkModeSwitch";
type SideBarProps = {};

export const SideBar: React.FC<SideBarProps> = () => {
  return (
    <Box as="nav" height="full" pt="1rem">
      <SideBarLink href="/" icon={<HiOutlineGlobe />}>
        Marketing
      </SideBarLink>
      <SideBarLink href="/app" icon={<HiOutlineHome />}>
        Application
      </SideBarLink>
      <SideBarLink href="/app/stories" icon={<HiOutlineBookOpen />}>
        Stories
      </SideBarLink>
      <SideBarLink href="/app/map" icon={<BiNetworkChart />}>
        Node Map
      </SideBarLink>
      <DarkModeSwitch />
    </Box>
  );
};
