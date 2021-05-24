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
import { GET_STORIES_BY_TIER } from "gql/content";
import { HASURA_API_URL } from "lib/config";

const Browse = () => {
  const session = useSession();
  const contentTier =
    (session && session[0]?.user?.content_tier) || "ckom1y4sw0rpn0b70rca9xby8";

  const [result] = useQuery({
    query: GET_STORIES_BY_TIER,
    variables: {
      id: contentTier,
    },
  });
  const { data, fetching, error } = result;
  if (fetching) return <CompLoading />;
  if (error) return <CompLoading />;

  const content = data.contentTier.storyGroups.reduce((list, storyGroup) => {
    return list.concat(storyGroup.stories);
  }, []);

  return (
    <>
      <ViewBrowse content={content} />
    </>
  );
};

export async function getServerSideProps(context) {
  const session = getSession(context);
  const contentTier =
    (session && session[0]?.user?.content_tier) || "ckom1y4sw0rpn0b70rca9xby8";
  const token = (session && session[0]?.token) || null;

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
