import { Highlight } from "react-instantsearch-dom";
import { Flex, Box, Text, AspectRatio } from "@chakra-ui/react";
import CompLink from "../CompLink";

export const SearchHit = ({ hit }) => {
  return (
    <CompLink href={`/stories/${hit.fields.slug["en-US"]}`}>
      {console.log(hit.fields)}
      <Flex width="full">
        <Box maxW="128px" pr="1rem">
          <video src={`${hit.fields.coverVideoUrl["en-US"]}`} />
        </Box>
        <Box>
          <Highlight attribute="fields.storyName.en-US" hit={hit} />
          <br />
          <Highlight attribute="fields.storyShortDescription.en-US" hit={hit} />
        </Box>
      </Flex>
    </CompLink>
  );
};
