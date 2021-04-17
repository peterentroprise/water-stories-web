import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";

const Link = ({ children, href, ...rest }) => {
  return (
    <NextLink passHref href={href}>
      <ChakraLink {...rest}> {children}</ChakraLink>
    </NextLink>
  );
};

export default Link;
