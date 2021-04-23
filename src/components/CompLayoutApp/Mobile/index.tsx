import { Flex } from "@chakra-ui/react";

import { Background } from "../Background";
import { RightWrapper } from "../RightWrapper";

import { PageWrapper } from "../PageWrapper";
import { BottomBar } from "./BottomBar";
type MobileProps = {
  pageName: string;
};

const Mobile: React.FC<MobileProps> = ({ children }) => {
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

      <RightWrapper>
        <PageWrapper>{children}</PageWrapper>
        <BottomBar />
      </RightWrapper>
    </Flex>
  );
};

export default Mobile;
