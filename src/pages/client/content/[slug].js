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
import ViewContent from "views/Content";

import { HASURA_API_URL } from "lib/config";
import {
  GET_CONTENT_PREVIEW_SLUGS,
  GET_CONTENT_PREVIEW_BY_SLUG,
} from "gql/content";

const PageContent = ({ slug }) => {
  const [result] = useQuery({
    query: GET_CONTENT_PREVIEW_BY_SLUG,
    variables: { slug },
  });
  const { data, fetching, error } = result;
  if (fetching) return <CompLoading />;
  if (error) return <CompLoading />;
  return <ViewContent contentPreview={data.contentPreview} />;
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
  await client.query(GET_CONTENT_PREVIEW_BY_SLUG, slug).toPromise();

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
  const result = await client.query(GET_CONTENT_PREVIEW_SLUGS).toPromise();
  console.log(result);
  const paths = result.data.contentPreviews.map((contentPreview) => ({
    params: { slug: contentPreview.slug.toString() },
  }));

  return { paths, fallback: false };
};

const ContentWrapper = withUrqlClient(
  (ssr) => ({
    url: HASURA_API_URL,
  }),
  { ssr: false }
)(PageContent);

export default ContentWrapper;

ContentWrapper.Layout = LayoutApp;
