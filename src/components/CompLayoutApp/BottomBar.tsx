import { Button, Flex, useColorMode } from "@chakra-ui/react";

import { DrawerButton } from "./DrawerButton";
import { textColor, bgColor } from "./constants";

type BottomBarProps = {
  isOpen?: boolean;
  toggle?: () => void;
};

export const BottomBar: React.FC<BottomBarProps> = () => {
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
      <Flex
        align="center"
        minH=".5rem"
        height="full"
        width="full"
        justifyContent="space-between"
        p="1rem"
      >
        <DrawerButton />
        <Button variant="ghost">Browse</Button>
        <Button variant="ghost">Explore</Button>
        <Button variant="ghost">Search</Button>
      </Flex>
    </Flex>
  );
};
