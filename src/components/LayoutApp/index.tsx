import * as React from "react";
import { Flex } from "@chakra-ui/react";

import { AppBar } from "./AppBar";
import { BottomNavBar } from "./BottomNavBar";
import { Sidebar } from "./Sidebar";
import { Main } from "./Main";
import LottieBg from "../CompLottieBg";

type LayoutAppProps = {};

const LayoutApp: React.FC<LayoutAppProps> = ({ children }) => {
  return (
    <Flex
      height="100vh"
      // bgGradient={mode(
      //   "linear(to-tr, teal.200, blue.500)",
      //   "linear(to-tr, teal.200, blue.500)"
      // )}
      overflow="hidden"
      sx={{ "--sidebar-width": "256px" }}
    >
      <LottieBg />
      <AppBar />
      <BottomNavBar />
      <Sidebar />
      <Main>{children}</Main>
    </Flex>
  );
};

export default LayoutApp;
