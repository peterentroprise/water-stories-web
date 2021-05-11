import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useColorMode,
  IconButton,
  Flex,
  Box,
} from "@chakra-ui/react";
import ArrowBackIcon from "@material-ui/icons/ArrowBackRounded";
import ClearIcon from "@material-ui/icons/ClearRounded";

import { bgColor, textColor } from "../../constants";
import { useSearchDrawerState } from "../../hooks/useSearchDrawerState";
import { SearchWrapper } from "./SearchWrapper";
import { SearchBar } from "./SearchBar";
import { SearchContent } from "./SearchContent";

export const SearchModal = () => {
  const { colorMode } = useColorMode();
  const { searchDrawerIsOpen, toggleSearchDrawer } = useSearchDrawerState();
  return (
    <Drawer
      size="full"
      placement="bottom"
      isOpen={searchDrawerIsOpen}
      blockScrollOnMount={false}
      onOverlayClick={toggleSearchDrawer}
      scrollBehavior="inside"
    >
      <DrawerOverlay />

      <SearchWrapper>
        <DrawerContent bg={bgColor[colorMode]} color={textColor[colorMode]}>
          <DrawerHeader px="1rem">
            <Flex>
              <Box flexGrow="1">
                <SearchBar />
              </Box>
              <IconButton
                aria-label="Close Search"
                icon={<ClearIcon />}
                onClick={toggleSearchDrawer}
                ml="1rem"
              />
            </Flex>
          </DrawerHeader>
          <DrawerBody px="1rem">
            <SearchContent />
          </DrawerBody>
        </DrawerContent>
      </SearchWrapper>
    </Drawer>
  );
};
