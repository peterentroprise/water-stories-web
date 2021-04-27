import { GetStaticProps } from "next";

import contenfulFetch from "../../../utils/contenfulFetch";
import { PageBrowseProps } from "../../../types";
import { GET_STORY_COLLECTION } from "../../../gql/Stories";
import PageStories from "../../../components/PageStories";

const WithStaticProps = ({ stories }: PageBrowseProps) => {
  return <PageStories stories={stories} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await contenfulFetch(GET_STORY_COLLECTION);
  const stories = data.storyCollection.items;
  return { props: { stories } };
};

export default WithStaticProps;
