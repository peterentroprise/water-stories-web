import { Box, Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";

const Link = ({ children, href, useChakraLink = false, ...rest }) => {
  return (
    <NextLink passHref href={href}>
      {(useChakraLink && <ChakraLink {...rest}>{children}</ChakraLink>) || (
        <Box {...rest}>{children}</Box>
      )}
    </NextLink>
  );
};

export default Link;
