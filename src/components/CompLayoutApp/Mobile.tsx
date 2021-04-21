import { Flex } from "@chakra-ui/react";

import { Background } from "./Background";
import { RightWrapper } from "./RightWrapper";
import { BottomWrapper } from "./BottomWrapper";

import { PageWrapper } from "./PageWrapper";
import { AppBar } from "./AppBar";
import { BottomBar } from "./BottomBar";
type MobileProps = {
  pageName: string;
};

export const Mobile: React.FC<MobileProps> = ({ children, pageName }) => {
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
          <BottomBar />
        </RightWrapper>
      </BottomWrapper>
    </Flex>
  );
};
