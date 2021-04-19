import { Wrapper } from "./Wrapper";
import { Background } from "./Background";
import { Main } from "./Main";

import { AppBar } from "./AppBar";
import { BottomNavBar } from "./BottomNavBar";
import { Sidebar } from "./Sidebar";
import { useMobileMenuState } from "../../hooks/useMobileMenuState";

type LayoutAppProps = {};

const LayoutApp: React.FC<LayoutAppProps> = ({ children }) => {
  const { isOpen, toggle } = useMobileMenuState();
  return (
    <Wrapper>
      <Background />
      <AppBar />
      <Sidebar />
      <Main isOpen={isOpen}>
        {children}
        <BottomNavBar isOpen={isOpen} toggle={toggle} />
      </Main>
    </Wrapper>
  );
};

export default LayoutApp;
