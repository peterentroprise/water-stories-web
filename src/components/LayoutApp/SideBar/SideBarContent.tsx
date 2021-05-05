import { VStack, Heading } from "@chakra-ui/react";
import {
  HiOutlineGlobe,
  HiOutlineHome,
  HiOutlineBookOpen,
  HiOutlineUserCircle,
} from "react-icons/hi";
import { BiNetworkChart } from "react-icons/bi";
import { SideBarLink } from "./SideBarLink";
import DarkModeSwitch from "../../CompDarkModeSwitch";
import { SearchButton } from "../../CompSearch/SearchButton";
type SideBarProps = {};

export const SideBarContent: React.FC<SideBarProps> = () => {
  return (
    <>
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
        <SideBarLink href="/client/browse" icon={<HiOutlineBookOpen />}>
          Browse
        </SideBarLink>
        <SideBarLink href="/client/explore" icon={<BiNetworkChart />}>
          Explore
        </SideBarLink>
        <SideBarLink href="/client/account" icon={<HiOutlineUserCircle />}>
          Account
        </SideBarLink>
        <SearchButton />
      </VStack>

      <DarkModeSwitch />
    </>
  );
};
