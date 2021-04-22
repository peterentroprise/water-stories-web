import { Box, Flex, useColorMode } from "@chakra-ui/react";

import { useMobileMenuState } from "../../../hooks/useMobileMenuState";
import { MobileMenuDrawer } from "./MobileMenuDrawer";
import { MobileMenuDrawerButton } from "./MobileMenuDrawerButton";
import { textColor, bgColor } from "../constants";
import { BottomBarNavButton } from "./BottomBarNavButton";

import LibraryBooksIcon from "@material-ui/icons/LibraryBooksOutlined";
import AutoGraphIcon from "@material-ui/icons/AutoGraphOutlined";
import SearchIcon from "@material-ui/icons/SearchOutlined";

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
    >
      <Box
        bg={bgColor[colorMode]}
        borderTopRightRadius="1rem"
        w="16px"
        h="100%"
        borderTop=" 1px solid rgba(167, 161, 161, 0.12)"
      ></Box>
      <Box id="tab--fab" w="72px" h="28px" bg="transparent" border="none">
        <Flex
          w="72px"
          h="32px"
          borderBottomRadius="36px"
          bgColor="transparent"
          boxShadow={`0px 28px 0px 26px ${bgColor[colorMode]}`}
          borderBottom=" 1px solid rgba(167, 161, 161, 0.12)"
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
            onClick={onOpen}
            sx={{
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            }}
            zIndex="-1"
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
        h="3.5rem"
        borderTop=" 1px solid rgba(167, 161, 161, 0.12)"
      ></Box>
      <Flex
        bg={bgColor[colorMode]}
        borderTopRightRadius="1rem"
        w="full"
        h="3.5rem"
        pr="1rem"
        color={textColor[colorMode]}
        borderTop=" 1px solid rgba(167, 161, 161, 0.12)"
        boxShadow="0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
        zIndex="-1"
      >
        <BottomBarNavButton href="/app/browse" icon={LibraryBooksIcon}>
          Browse
        </BottomBarNavButton>
        <BottomBarNavButton href="/app/explore" icon={AutoGraphIcon}>
          Explore
        </BottomBarNavButton>
        <BottomBarNavButton href="/app/search" icon={SearchIcon}>
          Search
        </BottomBarNavButton>
      </Flex>
    </Flex>
  );
};
