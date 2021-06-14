import { withUrqlClient, initUrqlClient } from "next-urql";
import {
  ssrExchange,
  dedupExchange,
  cacheExchange,
  fetchExchange,
  createClient,
  useQuery,
} from "urql";

import LayoutApp from "components/LayoutApp";
import CompLoading from "components/CompLoading";
import ViewStory from "views/Story";

import { HASURA_API_URL } from "lib/config";
import { GET_STORIES, GET_STORY_BY_SLUG } from "gql/story";

const PageStory = ({ slug }) => {
  const [result] = useQuery({ query: GET_STORY_BY_SLUG, variables: { slug } });
  const { data, fetching, error } = result;
  if (fetching) return <CompLoading />;
  if (error) return <CompLoading />;
  return <ViewStory story={data.story} />;
};

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;
  const ssrCache = ssrExchange({ isClient: false });
  const client = initUrqlClient(
    {
      url: HASURA_API_URL,
      exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
    },
    false
  );
  const urqlState = ssrCache.extractData();
  await client.query(GET_STORY_BY_SLUG, slug).toPromise();

  return {
    props: {
      slug: slug,
      urqlState: urqlState,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = async () => {
  const client = createClient({
    url: HASURA_API_URL,
  });
  const result = await client.query(GET_STORIES).toPromise();
  const paths = result.data.stories.map((story) => ({
    params: { slug: story.slug.toString() },
  }));

  return { paths, fallback: false };
};

const StoryWrapper = withUrqlClient(
  (ssr) => ({
    url: HASURA_API_URL,
  }),
  { ssr: false }
)(PageStory);

export default StoryWrapper;

StoryWrapper.Layout = LayoutApp;
