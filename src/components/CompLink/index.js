import {
  Box,
  Link as ChakraLink,
  LinkOverlay as ChakraLinkOverlay,
} from "@chakra-ui/react";
import NextLink from "next/link";

export const LinkOverlay = ({ children, href, ...rest }) => {
  return (
    <NextLink passHref href={href}>
      <ChakraLinkOverlay {...rest}>{children}</ChakraLinkOverlay>
    </NextLink>
  );
};

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
