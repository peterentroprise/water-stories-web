import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalContent,
  useColorMode,
} from "@chakra-ui/react";

import { bgColor, textColor } from "../../constants";
import { useSearchDrawerState } from "../../hooks/useSearchDrawerState";
import { SearchWrapper } from "./SearchWrapper";
import { SearchBar } from "./SearchBar";
import { SearchContent } from "./SearchContent";

export const SearchModal = () => {
  const { colorMode } = useColorMode();
  const { searchDrawerIsOpen, toggleSearchDrawer } = useSearchDrawerState();
  return (
    <Modal
      size="md"
      isOpen={searchDrawerIsOpen}
      blockScrollOnMount={false}
      onOverlayClick={toggleSearchDrawer}
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <SearchWrapper>
        <ModalContent bg={bgColor[colorMode]} color={textColor[colorMode]}>
          <ModalHeader>
            <SearchBar />
          </ModalHeader>
          <ModalBody>
            <SearchContent />
          </ModalBody>
        </ModalContent>
      </SearchWrapper>
    </Modal>
  );
};
