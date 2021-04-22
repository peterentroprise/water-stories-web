// import algoliasearch from "algoliasearch/lite";
// import { withInstantSearch } from "next-instantsearch";
// import {
//   Configure,
//   Highlight,
//   Hits,
//   Pagination,
//   RefinementList,
//   SearchBox,
// } from "react-instantsearch-dom";

import PageSearch from "../../components/PageSearch";
import CompLayoutApp from "../../components/CompLayoutApp";

// const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
// const ALGOLIA_SEARCH_ONLY_API_KEY = process.env.ALGOLIA_SEARCH_ONLY_API_KEY;

// const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_ONLY_API_KEY);

// const HitComponent = ({ hit }) => (
//   <Highlight attribute="fields.storyName.en-US" hit={hit} />
// );

const Search = () => (
  <CompLayoutApp pageName="Search">
    <PageSearch pageName="Search" />
  </CompLayoutApp>
);

//  withInstantSearch({
//   indexName: "dev_water_stories",
//   searchClient,
//   onSearchStateChange: () => {},
// })(Search);

// <Configure hitsPerPage={12} />
// <SearchBox />
// {/* <RefinementList attribute="categories" /> */}
// <Hits hitComponent={HitComponent} />

export default Search;
