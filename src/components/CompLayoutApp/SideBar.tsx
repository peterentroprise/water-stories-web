import { Box, VStack } from "@chakra-ui/react";
import {
  HiOutlineGlobe,
  HiOutlineHome,
  HiOutlineBookOpen,
  HiSearch,
} from "react-icons/hi";
import { BiNetworkChart } from "react-icons/bi";
import { SideBarLink } from "./SideBarLink";
import DarkModeSwitch from "../CompDarkModeSwitch";
type SideBarProps = {};

export const SideBar: React.FC<SideBarProps> = () => {
  return (
    <Box as="nav" height="full" pt="1rem">
      <VStack spacing=".5rem" align="stretch">
        <SideBarLink href="/" icon={<HiOutlineGlobe />}>
          Community
        </SideBarLink>
        <SideBarLink href="/app" icon={<HiOutlineHome />}>
          Water Stories
        </SideBarLink>
        <SideBarLink href="/app/browse" icon={<HiOutlineBookOpen />}>
          Browse
        </SideBarLink>
        <SideBarLink href="/app/explore" icon={<BiNetworkChart />}>
          Explore
        </SideBarLink>
        <SideBarLink href="/app/search" icon={<HiSearch />}>
          Search
        </SideBarLink>
      </VStack>

      <DarkModeSwitch />
    </Box>
  );
};
