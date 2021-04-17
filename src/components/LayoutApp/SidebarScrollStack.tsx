import * as React from "react";
import { Box, Stack, useColorModeValue as mode } from "@chakra-ui/react";

type SidebarScrollStackProps = {};

export const SidebarScrollStack: React.FC<SidebarScrollStackProps> = ({
  children,
}) => {
  return (
    <Box
      overflowY="auto"
      height="80vh"
      minH="px"
      maxH="full"
      pt="1rem"
      pb="1rem"
      sx={{
        "&::-webkit-scrollbar-track": {
          bg: "transparent",
        },
        "&::-webkit-scrollbar": {
          width: ".25rem",
        },
        "&::-webkit-scrollbar-thumb": {
          bg: mode("blue.600", "gray.700"),
          borderRadius: "xl",
        },
      }}
    >
      <Stack pb="1rem">{children}</Stack>
    </Box>
  );
};
