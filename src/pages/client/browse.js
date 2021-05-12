import useSWR from "swr";
import { getSession, useSession } from "next-auth/client";
import { request, GraphQLClient } from "graphql-request";

import PageBrowse from "components/PageBrowse";
import contenfulFetch from "utils/contenfulFetch";

import { GET_STORY_COLLECTION } from "gql/story";
import { GET_STORIES_BY_TIER } from "gql/content";

import { HASURA_API_URL, HASURA_ADMIN_SECRET } from "lib/config";

const fetcher = async (query, variables, headers) => {
  const client = new GraphQLClient(HASURA_API_URL, { headers });
  return await client.request(query, variables);
};

const Browse = (props) => {
  const initialData = props.data;

  const [session, loading] = useSession();

  const variables = {};
  const headers = {
    // authorization: `Bearer ${session.token}`,
    // "x-hasura-admin-secret": HASURA_ADMIN_SECRET,
  };

  // const { data: contenTier, error } = useSWR(
  //   [GET_STORIES_BY_TIER, variables, headers],
  //   fetcher,
  //   {
  //     initialData,
  //   }
  // );

  // if (error) return <>failed to load</>;
  // if (!contenTier) return <>loading...</>;
  // const content = initialData.contentTier.storyGroups[0].stories;

  const content = initialData.contentTier.storyGroups.reduce(
    (list, storyGroup) => {
      return list.concat(storyGroup.stories);
    },
    []
  );

  return <PageBrowse content={content} />;
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const token = (session && session.token) || null;

  const contentTier =
    (session && session.user.content_tier) || "ckom1y4sw0rpn0b70rca9xby8";

  const variables = {
    id: contentTier,
  };

  const headers = {
    // authorization: `Bearer ${token}`,
    "x-hasura-admin-secret": HASURA_ADMIN_SECRET,
  };

  const data = await fetcher(GET_STORIES_BY_TIER, variables, headers);

  return {
    props: { data },
  };
}

export default Browse;
