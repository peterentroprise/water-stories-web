import { useSession, getSession } from "next-auth/client";
import { withUrqlClient, initUrqlClient } from "next-urql";
import {
  ssrExchange,
  dedupExchange,
  cacheExchange,
  fetchExchange,
  useQuery,
} from "urql";

import LayoutApp from "components/LayoutApp";
import ViewBrowse from "views/Browse";
import CompLoading from "components/CompLoading";
import { GET_CONTENT_PREVIEWS } from "gql/content";
import { HASURA_API_URL } from "lib/config";

const PageBrowse = () => {
  const [result] = useQuery({
    query: GET_CONTENT_PREVIEWS,
  });
  const { data, fetching, error } = result;
  if (fetching) return <CompLoading />;
  if (error) return <CompLoading />;

  return (
    <>
      <ViewBrowse contentPreviews={data.contentPreviews} />
    </>
  );
};

export async function getStaticProps() {
  const ssrCache = ssrExchange({ isClient: false });
  const client = initUrqlClient(
    {
      url: HASURA_API_URL,
      exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
    },
    false
  );

  const urqlState = ssrCache.extractData();
  await client.query(GET_CONTENT_PREVIEWS).toPromise();

  return {
    props: {
      urqlState: urqlState,
    },
    revalidate: 600,
  };
}

const BrowseWrapper = withUrqlClient(
  (ssr) => ({
    url: HASURA_API_URL,
  }),
  { ssr: false }
)(PageBrowse);

export default BrowseWrapper;

BrowseWrapper.Layout = LayoutApp;
