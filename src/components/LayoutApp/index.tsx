import { Flex } from "@chakra-ui/react";

import { Background } from "./Background";
import { ScrollWrapper } from "./ScrollWrapper";
import { PageWrapper } from "./PageWrapper";
import MobileBottomBar from "./MobileBottomBar";
import SideBar from "./SideBar";
import CompSearch from "../CompSearch";

type LayoutAppProps = {
  pageName: string;
};

const LayoutApp: React.FC<LayoutAppProps> = ({ children }) => {
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
      <Background />
      <SideBar />
      <ScrollWrapper>
        <PageWrapper>{children}</PageWrapper>
        <MobileBottomBar />
      </ScrollWrapper>
    </Flex>
  );
};

export default LayoutApp;
