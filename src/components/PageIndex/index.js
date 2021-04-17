import { Flex, Box, Heading, Text, Button } from "@chakra-ui/react";
import CompLink from "../CompLink";

const PageIndex = () => {
  return (
    <Flex width="full" p="4rem" align="center" direction="column">
      <Box>
        <Heading size="xl" fontWeight="extrabold">
          Water Stories
        </Heading>
      </Box>
      <Box>
        <Text>Marketing Site</Text>
      </Box>
      <Box mt="2rem">
        <CompLink href="/app">
          <Button>Go To App</Button>
        </CompLink>
      </Box>
    </Flex>
  );
};

export default PageIndex;
