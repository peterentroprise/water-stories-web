import { Flex } from "@chakra-ui/react";

import { Background } from "./Background";
import { LeftWrapper } from "./LeftWrapper";
import { RightWrapper } from "./RightWrapper";
import { BottomWrapper } from "./BottomWrapper";

import { PageWrapper } from "./PageWrapper";
import { SideBar } from "./SideBar";
import { AppBar } from "./AppBar";
import { BottomBar } from "./BottomBar";
import { useMobileMenuState } from "../../hooks/useMobileMenuState";
type MobileProps = {
  pageName: string;
};

export const Mobile: React.FC<MobileProps> = ({
  children,
  pageName = { pageName },
}) => {
  return (
    <Flex
      height="100vh"
      flexDirection="column"
      overflow="hidden"
      sx={{
        "--sidebar-width": "256px",
      }}
    >
      <Background />
      <AppBar pageName={pageName} />
      <BottomWrapper>
        <RightWrapper>
          <PageWrapper>{children}</PageWrapper>
        </RightWrapper>
      </BottomWrapper>
    </Flex>
  );
};
