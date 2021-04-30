import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  Stats,
  Pagination,
} from "react-instantsearch-dom";
import { SearchHit } from "./SearchHit";

export const SearchContent = () => {
  return (
    <>
      <Stats />
      <Hits hitComponent={SearchHit} />
      <Pagination />
    </>
  );
};
