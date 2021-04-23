import { Highlight } from "react-instantsearch-dom";
import { Flex, Box, Text, AspectRatio } from "@chakra-ui/react";

export const Hit = ({ hit }) => {
  console.log(hit.fields.slug);
  console.log(hit.fields.storyShortDescription["en-US"]);
  console.log(
    hit.fields.storyLongDescription["en-US"].content[0].content[0].value
  );
  console.log(hit.fields.coverVideoUrl["en-US"]);
  return (
    <Flex>
      <Box maxW="128px" pr="1rem">
        <video src={`${hit.fields.coverVideoUrl["en-US"]}`} />
      </Box>
      <Box>
        <Highlight attribute="fields.storyName.en-US" hit={hit} />
        <br />
        <Highlight attribute="fields.storyShortDescription.en-US" hit={hit} />
      </Box>
    </Flex>
  );
};
