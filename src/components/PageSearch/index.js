import React from "react";
import {
  RefinementList,
  SearchBox,
  Hits,
  Configure,
  Pagination,
  InstantSearch,
} from "react-instantsearch-dom";

import { Flex, Box, Heading } from "@chakra-ui/react";

import { Hit } from "./Hit";

const PageSearch = ({
  pageName = "Search",
  searchState,
  resultsState,
  onSearchStateChange,
  createURL,
  indexName,
  searchClient,
  onSearchParameters,
  ...rest
}) => {
  return (
    <Flex
      p="1rem"
      mb="10rem"
      width="full"
      maxW="container.sm"
      py="1rem"
      direction="column"
    >
      <Heading pt="2rem" pb="1rem" size="3xl" fontWeight="extrabold">
        {pageName}
      </Heading>
      <InstantSearch
        searchClient={searchClient}
        resultsState={resultsState}
        onSearchStateChange={onSearchStateChange}
        searchState={searchState}
        createURL={createURL}
        indexName={indexName}
        onSearchParameters={onSearchParameters}
        {...rest}
      >
        <Configure hitsPerPage={12} />
        <Box position="sticky" top="1rem">
          <SearchBox />
        </Box>

        <Box>
          <RefinementList attribute="fields.storyName.en-US" />
        </Box>
        <Box listStyleType="none">
          <Hits hitComponent={Hit} />
        </Box>

        <Pagination />
      </InstantSearch>
    </Flex>
  );
};

export default PageSearch;
