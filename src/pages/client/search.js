import { isEqual } from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "next/router";
import qs from "qs";
import algoliasearch from "algoliasearch/lite";
import { findResultsState } from "react-instantsearch-dom/server";
import dynamic from "next/dynamic";

import PageSearch from "../../components/PageSearch";
// const PageSearch = dynamic(() => import("../../components/PageSearch"), {
//   ssr: false,
// });

const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const ALGOLIA_SEARCH_ONLY_API_KEY =
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY;

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_ONLY_API_KEY);

const updateAfter = 700;

const createURL = (state) => `?${qs.stringify(state)}`;

const pathToSearchState = (path) =>
  path.includes("?") ? qs.parse(path.substring(path.indexOf("?") + 1)) : {};

const searchStateToURL = (searchState) =>
  searchState ? `${window.location.pathname}?${qs.stringify(searchState)}` : "";

const DEFAULT_PROPS = {
  searchClient,
  indexName: "dev_water_stories",
};

class Search extends React.Component {
  static propTypes = {
    router: PropTypes.object.isRequired,
    resultsState: PropTypes.object,
    searchState: PropTypes.object,
  };

  state = {
    searchState: this.props.searchState,
    lastRouter: this.props.router,
  };

  static async getInitialProps({ asPath }) {
    const searchState = pathToSearchState(asPath);
    const resultsState = await findResultsState(PageSearch, {
      ...DEFAULT_PROPS,
      searchState,
    });

    return {
      resultsState,
      searchState,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (!isEqual(state.lastRouter, props.router)) {
      return {
        searchState: pathToSearchState(props.router.asPath),
        lastRouter: props.router,
      };
    }

    return null;
  }

  onSearchStateChange = (searchState) => {
    clearTimeout(this.debouncedSetState);

    this.debouncedSetState = setTimeout(() => {
      const href = searchStateToURL(searchState);

      this.props.router.push(href, href, {
        shallow: true,
      });
    }, updateAfter);

    this.setState({ searchState });
  };

  render() {
    return (
      <PageSearch
        {...DEFAULT_PROPS}
        pageName="Search"
        searchState={this.state.searchState}
        resultsState={this.props.resultsState}
        onSearchStateChange={this.onSearchStateChange}
        createURL={createURL}
      />
    );
  }
}

export default withRouter(Search);
