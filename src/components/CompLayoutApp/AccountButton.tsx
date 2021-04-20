import * as React from "react";
import { Avatar, Box, useColorModeValue as mode } from "@chakra-ui/react";

type AccountButtonProps = {};

export const AccountButton: React.FC<AccountButtonProps> = () => {
  return (
    <Box
      as="a"
      href="#"
      display="block"
      transition="background 0.1s"
      rounded="md"
      cursor="pointer"
      _hover={{ color: "white", bg: mode("purple.900", "gray.600") }}
      whiteSpace="nowrap"
    >
      <Avatar size="sm" name="Peter Arnold" />
    </Box>
  );
};
