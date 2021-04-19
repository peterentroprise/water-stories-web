import { RootWrapper } from "./RootWrapper";

import { MiddleWrapper } from "./MiddleWrapper";
import { PageWrapper } from "./PageWrapper";
import { SideBar } from "./SideBar";
import { AppBar } from "./AppBar";
import { BottomBar } from "./BottomBar";

type CompLayoutAppProps = {};

const CompLayoutApp: React.FC<CompLayoutAppProps> = ({ children }) => {
  return (
    <RootWrapper>
      <AppBar />
      <MiddleWrapper>
        <SideBar />
        <PageWrapper>{children}</PageWrapper>
      </MiddleWrapper>
      <BottomBar />
    </RootWrapper>
  );
};

export default CompLayoutApp;
