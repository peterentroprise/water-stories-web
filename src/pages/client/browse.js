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
import PageBrowse from "components/PageBrowse";
import { GET_STORIES_BY_TIER } from "gql/content";
import { HASURA_API_URL } from "lib/config";

const Browse = () => {
  const session = useSession();
  const contentTier =
    (session && session?.user?.content_tier) || "ckom1yh5c10y20c75a4oj0mym";
  const token = (session && session.token) || null;
  console.log(token);

  const [result] = useQuery({
    query: GET_STORIES_BY_TIER,
    variables: {
      id: contentTier,
    },
  });
  const { data, fetching, error } = result;
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  const content = data.contentTier.storyGroups.reduce((list, storyGroup) => {
    return list.concat(storyGroup.stories);
  }, []);

  return (
    <>
      <PageBrowse content={content} />
    </>
  );
};

export async function getServerSideProps(context) {
  const session = getSession(context);
  const token = (session && session.token) || null;
  const contentTier =
    (session && session?.user?.content_tier) || "ckom1yh5c10y20c75a4oj0mym";

  const ssrCache = ssrExchange({ isClient: false });
  const client = initUrqlClient(
    {
      url: HASURA_API_URL,
      fetchOptions: {
        headers: {
          Authorization: `Bearer ${token ?? ""}`,
        },
      },
      exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
    },
    false
  );

  const urqlState = ssrCache.extractData();

  await client
    .query(GET_STORIES_BY_TIER, {
      id: contentTier,
    })
    .toPromise();

  return {
    props: {
      urqlState: urqlState,
    },
    // revalidate: 600,
  };
}

const BrowseWrapper = withUrqlClient(
  (ssr) => ({
    url: HASURA_API_URL,
  }),
  { ssr: false }
)(Browse);

export default BrowseWrapper;

BrowseWrapper.Layout = LayoutApp;
