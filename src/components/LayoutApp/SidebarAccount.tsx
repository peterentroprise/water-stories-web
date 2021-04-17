import * as React from "react";
import {
  Avatar,
  Box,
  HStack,
  useColorMode,
  useColorModeValue as mode,
} from "@chakra-ui/react";

type SidebarAccountProps = {};

export const SidebarAccount: React.FC<SidebarAccountProps> = () => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "rgba( 255, 255, 255, 0.5 )",
    dark: "rgba( 0, 0, 0, 0.25 )",
  };

  return (
    <Box
      as="a"
      href="#"
      px="1rem"
      py=".5rem"
      display="block"
      transition="background 0.1s"
      rounded="md"
      cursor="pointer"
      _hover={{ color: "white", bg: mode("blue.600", "gray.600") }}
      whiteSpace="nowrap"
      // bg={bgColor[colorMode]}
      // sx={{
      //   boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      //   backdropFilter: "blur( 4px )",
      //   WebkitBackdropFilter: "blur( 4px )",
      //   border: "1px solid rgba( 255, 255, 255, 0.18 )",
      // }}
    >
      <HStack display="inline-flex" align="center">
        {/* <Box lineHeight="1">
          <Text fontSize="xs" fontWeight="semibold">
            Peter Arnold
          </Text>
          <Text fontSize="xs" mt=".2rem">
            peter@entroprise.com
          </Text>
        </Box> */}
        <Avatar size="sm" name="Peter Arnold" />
      </HStack>
    </Box>
  );
};
