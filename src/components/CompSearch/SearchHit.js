import { Highlight } from "react-instantsearch-dom";
import { Flex, Box, Text, AspectRatio } from "@chakra-ui/react";
import CompLink from "../CompLink";
import { useSearchDrawerState } from "../../hooks/useSearchDrawerState";

export const SearchHit = ({ hit }) => {
  const { toggleSearchDrawer } = useSearchDrawerState();

  return (
    <CompLink href={`/client/stories/${hit.fields.slug["en-US"]}`}>
      <Flex onClick={toggleSearchDrawer} width="full" py="1rem">
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
