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
  return <RootWrapper pageName={pageName}>{children}</RootWrapper>;
};

export default CompLayoutApp;
