import {
  ButtonGroup,
  Button,
  Text,
  Flex,
  HStack,
  useColorMode,
} from "@chakra-ui/react";

import { DrawerButton } from "./DrawerButton";
import { textColor, bgColor } from "./constants";

type BottomBarProps = {
  isOpen: boolean;
  toggle: () => void;
};

export const BottomBar: React.FC<BottomBarProps> = ({ isOpen, toggle }) => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      // display={["flex", "none", "none", "none"]}
      position="sticky"
      bottom="0rem"
      height="4rem"
      w="full"
      alignItems="center"
      transition="left 0.2s"
      bg={bgColor[colorMode]}
      color={textColor[colorMode]}
      borderTopRadius="2xl"
      sx={{
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 8px )",
        WebkitBackdropFilter: "blur( 8px )",
      }}
    >
      <HStack height="full" width="full" align="center">
        <Flex py="1rem" justify="center" align="center" px="1rem">
          <Flex align="center" minH=".5rem">
            <DrawerButton onClick={toggle} isOpen={isOpen} />
            <ButtonGroup variant="outline">
              <Button>Browse</Button>
              <Button>Explore</Button>
              <Button>Search</Button>
            </ButtonGroup>
          </Flex>
        </Flex>
      </HStack>
    </Flex>
  );
};
