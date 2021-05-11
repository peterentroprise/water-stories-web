import useSWR from "swr";
import { getSession, useSession } from "next-auth/client";
import { request, GraphQLClient } from "graphql-request";

import PageBrowse from "components/PageBrowse";
import contenfulFetch from "utils/contenfulFetch";

import { GET_STORY_COLLECTION } from "gql/story";
import { GET_USER_CONTENT } from "gql/content";
import { HASURA_API_URL, HASURA_ADMIN_SECRET } from "constants/hasura";

const fetcher = async (query, variables, headers) => {
  const client = new GraphQLClient(HASURA_API_URL, { headers });
  return await client.request(query, variables);
};

const Browse = (props) => {
  const initialData = props.content;
  const stories = props.stories;

  const [session, loading] = useSession();

  const variables = {};
  const headers = {
    // authorization: `Bearer ${session.token}`,
    // "x-hasura-admin-secret": HASURA_ADMIN_SECRET,
  };

  const { data: content, error } = useSWR(
    [GET_USER_CONTENT, variables, headers],
    fetcher,
    {
      initialData,
    }
  );

  if (error) return <>failed to load</>;
  if (!content) return <>loading...</>;
  return <PageBrowse stories={stories} content={content} />;
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const variables = {};
  const headers = {
    // authorization: `Bearer ${session.token}`,
    // "x-hasura-admin-secret": HASURA_ADMIN_SECRET,
  };

  const content = await fetcher(GET_USER_CONTENT, variables, headers);

  const data = await contenfulFetch(GET_STORY_COLLECTION);
  const stories = data.storyCollection.items;

  return {
    props: { stories, content },
  };
}

export default Browse;
