import { Box, Flex, useColorMode } from "@chakra-ui/react";

import { useMobileMenuState } from "../../../hooks/useMobileMenuState";
import { MobileMenuDrawer } from "./MobileMenuDrawer";
import { MobileMenuDrawerButton } from "./MobileMenuDrawerButton";
import { textColor, bgColor } from "../constants";
import { BottomBarNavButton } from "./BottomBarNavButton";
import { GiFiles, GiJourney, GiArchiveResearch } from "react-icons/gi";

import Link from "../../CompLink";

type BottomBarProps = {};

export const BottomBar: React.FC<BottomBarProps> = () => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useMobileMenuState();
  return (
    <Flex
      position="fixed"
      bottom="0rem"
      height="3.5rem"
      w="full"
      align="center"
      // bg={bgColor[colorMode]}
      // color={textColor[colorMode]}
      // borderTopRadius="2xl"
      // sx={{
      //   boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      //   backdropFilter: "blur( 8px )",
      //   WebkitBackdropFilter: "blur( 8px )",
      // }}
    >
      <Box
        id="tab--left"
        bg="white"
        // borderTopLeftRadius="1rem"
        borderTopRightRadius="1rem"
        w="100%"
        h="100%"
      ></Box>
      <Box id="tab--fab" w="151px" h="28px" bg="transparent" border="none">
        <Flex
          id="top"
          w="64px"
          h="28px"
          borderBottomRadius="28px"
          bgColor="transparent"
          boxShadow="0px 28px 0px 28px #fff"
        >
          <Flex
            id="fab"
            borderRadius="50%"
            align="center"
            justifyContent="center"
            w="56px"
            h="56px"
            bg="white"
            transform="translate(4px,-32px)"
            position="relative"
            sx={{
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 8px )",
              WebkitBackdropFilter: "blur( 8px )",
            }}
            onClick={onOpen}
          >
            <MobileMenuDrawerButton
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
            />
            <MobileMenuDrawer
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
            />
          </Flex>
        </Flex>
      </Box>
      <Box
        id="tab--right"
        bg="white"
        borderTopLeftRadius="1rem"
        borderTopRightRadius="1rem"
        w="100%"
        h="3.5rem"
      ></Box>
      {/* 

        <BottomBarNavButton href="/app/browse" icon={GiFiles}>
          Browse
        </BottomBarNavButton>
        <BottomBarNavButton href="/app/explore" icon={GiJourney}>
          Explore
        </BottomBarNavButton>
        <BottomBarNavButton href="/app/search" icon={GiArchiveResearch}>
          Search
        </BottomBarNavButton> */}
    </Flex>
  );
};
