import { Flex } from "@chakra-ui/react";

import { ScrollWrapper } from "./ScrollWrapper";
import { PageWrapper } from "./PageWrapper";
import MobileBottomBar from "./MobileBottomBar";
import SideBar from "./SideBar";
import CompSearch from "../CompSearch";

const LayoutApp = ({ children }) => {
  return (
    <Flex
      height="100vh"
      flexDirection={{ xs: "column", md: "row" }}
      overflow="hidden"
      sx={{
        "--sidebar-width": "256px",
      }}
    >
      <CompSearch />
      <SideBar />
      <ScrollWrapper>
        <PageWrapper>{children}</PageWrapper>
        <MobileBottomBar />
      </ScrollWrapper>
    </Flex>
  );
};

export default LayoutApp;
