import { Heading, Flex } from "@chakra-ui/react";

const PageClient = () => {
  return (
    <Flex w="full" bg="red" maxW="container.sm">
      <Heading px="1rem" pt="3rem" pb="2rem" size="3xl" fontWeight="extrabold">
        Hello Universe
      </Heading>
    </Flex>
  );
};

export default PageClient;
