import algoliasearch from "algoliasearch";
import { InstantSearch } from "react-instantsearch-dom";

const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const ALGOLIA_SEARCH_ONLY_API_KEY =
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY;

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_ONLY_API_KEY);

const searchIndex = "dev_water_stories";

export const SearchWrapper = ({ children }) => {
  return (
    <InstantSearch searchClient={searchClient} indexName={searchIndex}>
      {children}
    </InstantSearch>
  );
};
