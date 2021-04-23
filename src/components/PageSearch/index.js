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
        <SearchBox />
        <Box className="menu">
          <RefinementList attribute="categories" />
        </Box>
        <Box>
          <Hits hitComponent={Hit} />
        </Box>

        <Pagination />
      </InstantSearch>
    </Flex>
  );
};

export default PageSearch;
