import { Box, VStack, Heading } from "@chakra-ui/react";
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
      <Heading
        p="1rem"
        display={["block", "block", "none"]}
        size="md"
        fontWeight="extrabold"
      >
        Water Stories
      </Heading>
      <VStack spacing=".5rem" align="stretch">
        <SideBarLink href="/" icon={<HiOutlineGlobe />}>
          Community
        </SideBarLink>
        <SideBarLink href="/client" icon={<HiOutlineHome />}>
          Water Stories
        </SideBarLink>
        <SideBarLink href="/client/stories" icon={<HiOutlineBookOpen />}>
          Browse
        </SideBarLink>
        <SideBarLink href="/client/stories" icon={<BiNetworkChart />}>
          Explore
        </SideBarLink>
        <SideBarLink href="/client/search" icon={<HiSearch />}>
          Search
        </SideBarLink>
      </VStack>

      <DarkModeSwitch />
    </Box>
  );
};
