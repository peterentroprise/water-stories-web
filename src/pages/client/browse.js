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

  const tier_id =
    (session && session.user.content_tier) || "ckom1y4sw0rpn0b70rca9xby8";

  const variables = {
    id: tier_id,
  };

  const headers = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMDEzNzk0NzU5NjMwNDA1OTUyODUiLCJ1c2VyX2lkIjoiMTAxMzc5NDc1OTYzMDQwNTk1Mjg1IiwibmFtZSI6IlBldGVyIEFybm9sZCIsImVtYWlsIjoicGV0ZXJAZW50cm9wcmlzZS5jb20iLCJpbWFnZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnlYQUlGNDZWdVh2SGhHV25iYldJS3FvemdCQlNzWVRzVVY3UkxyPXM5Ni1jIiwiaWF0IjoxNjIwOTI3NTUxLjk5OSwiZXhwIjoxNjIxMDEzOTUxLCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsiYWRtaW4iLCJ1c2VyIl0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1yb2xlIjoidXNlciIsIngtaGFzdXJhLXVzZXItaWQiOiIxMDEzNzk0NzU5NjMwNDA1OTUyODUifSwiY29udGVudF90aWVyIjoiY2tvbTF5c3EwMHJ3NjBiNzA3ZDVrd2x5MSJ9.RYxsKi96BzEQWULhXJJ7s7nuEpvdxZbpD6w4GYmgog0`,
    // "x-hasura-admin-secret": HASURA_ADMIN_SECRET,
  };

  const { data: contentTier, error } = useSWR(
    [GET_STORIES_BY_TIER, variables, headers],
    fetcher,
    {
      initialData,
    }
  );

  if (error) return <>failed to load</>;
  if (!contentTier) return <>loading...</>;

  console.log(initialData);

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
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMDEzNzk0NzU5NjMwNDA1OTUyODUiLCJ1c2VyX2lkIjoiMTAxMzc5NDc1OTYzMDQwNTk1Mjg1IiwibmFtZSI6IlBldGVyIEFybm9sZCIsImVtYWlsIjoicGV0ZXJAZW50cm9wcmlzZS5jb20iLCJpbWFnZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnlYQUlGNDZWdVh2SGhHV25iYldJS3FvemdCQlNzWVRzVVY3UkxyPXM5Ni1jIiwiaWF0IjoxNjIwOTI3NTUxLjk5OSwiZXhwIjoxNjIxMDEzOTUxLCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsiYWRtaW4iLCJ1c2VyIl0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1yb2xlIjoidXNlciIsIngtaGFzdXJhLXVzZXItaWQiOiIxMDEzNzk0NzU5NjMwNDA1OTUyODUifSwiY29udGVudF90aWVyIjoiY2tvbTF5c3EwMHJ3NjBiNzA3ZDVrd2x5MSJ9.RYxsKi96BzEQWULhXJJ7s7nuEpvdxZbpD6w4GYmgog0`,
    // "x-hasura-admin-secret": HASURA_ADMIN_SECRET,
  };

  const data = await fetcher(GET_STORIES_BY_TIER, variables, headers);

  return {
    props: { data },
  };
}

export default Browse;
