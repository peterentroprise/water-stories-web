import * as React from "react";
import { Box } from "@chakra-ui/react";
import {
  HiOutlineGlobe,
  HiOutlineHome,
  HiOutlineBookOpen,
} from "react-icons/hi";
import { BiNetworkChart } from "react-icons/bi";

import { SidebarScrollStack } from "./SidebarScrollStack";

import { SidebarLink } from "./SidebarLink";
import DarkModeSwitch from "../CompDarkModeSwitch";

type SidebarProps = {};

export const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <Box
      as="nav"
      display="block"
      flex="1"
      pr="2rem"
      width="var(--sidebar-width)"
      left="0"
      position="fixed"
    >
      <Box fontSize="sm" lineHeight="tall">
        <SidebarScrollStack>
          <SidebarLink href="/" icon={<HiOutlineGlobe />}>
            Marketing
          </SidebarLink>
          <SidebarLink href="/app" icon={<HiOutlineHome />}>
            Application
          </SidebarLink>
          <SidebarLink href="/app/stories" icon={<HiOutlineBookOpen />}>
            Stories
          </SidebarLink>
          <SidebarLink href="/app/map" icon={<BiNetworkChart />}>
            Node Map
          </SidebarLink>
          <DarkModeSwitch />
        </SidebarScrollStack>
      </Box>
    </Box>
  );
};
