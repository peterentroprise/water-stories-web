import { GetStaticProps } from "next";

import contenfulFetch from "../../utils/contenfulFetch";
import { PageBrowseProps } from "../../types";
import { GET_STORY_COLLECTION } from "../../gql/story";
import PageBrowse from "../../components/PageBrowse";

const Browse = ({ stories }: PageBrowseProps) => {
  return <PageBrowse stories={stories} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await contenfulFetch(GET_STORY_COLLECTION);
  const stories = data.storyCollection.items;
  return { props: { stories } };
};

export default Browse;
