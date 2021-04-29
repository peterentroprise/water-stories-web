import { Box, Flex, useColorMode } from "@chakra-ui/react";

import { useMobileMenuState } from "../../../hooks/useMobileMenuState";
import { MobileMenuDrawer } from "./MobileMenuDrawer";
import { MobileMenuDrawerButton } from "./MobileMenuDrawerButton";
import { textColor, bgColor } from "../../../constants";
import { BottomBarNavButton } from "./BottomBarNavButton";

import LibraryBooksIcon from "@material-ui/icons/LibraryBooksOutlined";
import AutoGraphIcon from "@material-ui/icons/AutoGraphOutlined";
import SearchIcon from "@material-ui/icons/SearchOutlined";

type BottomBarProps = {};

export const BottomBar: React.FC<BottomBarProps> = () => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useMobileMenuState();
  return (
    <Flex position="fixed" bottom="0rem" height="4rem" w="full" align="center">
      <Box
        bg={bgColor[colorMode]}
        borderTopRightRadius="1rem"
        w="16px"
        h="100%"
      ></Box>
      <Box
        w="72px"
        h="36px"
        bg="transparent"
        border="none"
        pointerEvents="none"
      >
        <Flex
          w="72px"
          h="32px"
          borderBottomRadius="36px"
          bgColor="transparent"
          boxShadow={`0px 28px 0px 26px ${bgColor[colorMode]}`}
          pointerEvents="none"
        >
          <Flex
            borderRadius="50%"
            align="center"
            justifyContent="center"
            w="56px"
            h="56px"
            bg={bgColor[colorMode]}
            transform="translate(8px,-32px)"
            position="relative"
            sx={{
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            }}
            zIndex="-1"
            pointerEvents="all"
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
        bg={bgColor[colorMode]}
        borderTopLeftRadius="1rem"
        w="16px"
        h="full"
      ></Box>
      <Flex
        bg={bgColor[colorMode]}
        justifyContent="space-between"
        w="full"
        h="full"
        px="1rem"
        borderTopRightRadius="1rem"
        color={textColor[colorMode]}
        boxShadow="0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
        zIndex="-1"
      >
        <BottomBarNavButton href="/client/browse" icon={LibraryBooksIcon}>
          Browse
        </BottomBarNavButton>
        <BottomBarNavButton href="/client/explore" icon={AutoGraphIcon}>
          Explore
        </BottomBarNavButton>
        <BottomBarNavButton href="/client/search" icon={SearchIcon}>
          Search
        </BottomBarNavButton>
      </Flex>
    </Flex>
  );
};
