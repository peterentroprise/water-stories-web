import { VStack, Heading, Box } from "@chakra-ui/react";
import {
  HiOutlineGlobe,
  HiOutlineHome,
  HiOutlineBookOpen,
} from "react-icons/hi";
import { BiNetworkChart } from "react-icons/bi";

import { SideBarLink } from "./SideBarLink";
import DarkModeSwitch from "../../CompDarkModeSwitch";
import { AccountButton } from "./AccountButton";
type SideBarProps = {};

export const SideBarContent: React.FC<SideBarProps> = () => {
  return (
    <>
      <Heading
        p="1rem"
        // display={["block", "block", "none"]}
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
        <SideBarLink href="/client/browse" icon={<HiOutlineBookOpen />}>
          Browse
        </SideBarLink>
        <SideBarLink href="/client/explore" icon={<BiNetworkChart />}>
          Explore
        </SideBarLink>
      </VStack>

      <DarkModeSwitch />
      <Box position="fixed" bottom="1.5rem">
        <AccountButton />
      </Box>
    </>
  );
};
