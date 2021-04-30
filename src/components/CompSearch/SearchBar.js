import { SearchBox } from "react-instantsearch-dom";

export const SearchBar = ({ hit }) => {
  return (
    <>
      <SearchBox
        className="search-bar"
        translations={{ placeholder: "Search for stories" }}
      />
    </>
  );
};
