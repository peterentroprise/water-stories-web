import { RootWrapper } from "./RootWrapper";

import { TopWrapper } from "./TopWrapper";
import { LeftWrapper } from "./LeftWrapper";
import { RightWrapper } from "./RightWrapper";
import { BottomWrapper } from "./BottomWrapper";

import { PageWrapper } from "./PageWrapper";
import { SideBar } from "./SideBar";
import { AppBar } from "./AppBar";
import { BottomBar } from "./BottomBar";
import { useMobileMenuState } from "../../hooks/useMobileMenuState";

type CompLayoutAppProps = {
  pageName: string;
};

const CompLayoutApp: React.FC<CompLayoutAppProps> = ({
  children,
  pageName = "Default Page Name",
}) => {
  const { isOpen, toggle } = useMobileMenuState();
  return (
    <RootWrapper>
      {/* <TopWrapper> */}
      <AppBar pageName={pageName} />
      {/* </TopWrapper> */}
      <BottomWrapper>
        <LeftWrapper>
          <SideBar />
        </LeftWrapper>
        <RightWrapper>
          <PageWrapper>{children}</PageWrapper>
        </RightWrapper>
      </BottomWrapper>
      <BottomBar isOpen={isOpen} toggle={toggle} />
    </RootWrapper>
  );
};

export default CompLayoutApp;
