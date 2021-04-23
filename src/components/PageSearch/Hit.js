import { Highlight } from "react-instantsearch-dom";
import { Box, Text } from "@chakra-ui/react";

export const Hit = ({ hit }) => {
  console.log(hit.fields.slug);
  console.log(hit.fields.storyShortDescription["en-US"]);
  console.log(
    hit.fields.storyLongDescription["en-US"].content[0].content[0].value
  );
  console.log(hit.fields.coverVideoUrl["en-US"]);
  return (
    <Box>
      <Box>
        <video src={`${hit.fields.coverVideoUrl["en-US"]}`} />
      </Box>

      <Box>
        <Box>
          <Highlight attribute="name" hit={hit} />
          <Text>{hit.fields.storyName["en-US"]}</Text>
        </Box>
        <Box>
          <Highlight attribute="type" hit={hit} />
        </Box>
        <Box>
          <Highlight attribute="description" hit={hit} />
        </Box>
      </Box>
    </Box>
  );
};
