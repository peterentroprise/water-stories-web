import { GetStaticProps, GetStaticPaths } from "next";

import contenfulFetch from "../../../utils/contenfulFetch";
import { PageStoryProps, Story } from "../../../types";
import { GET_STORY_COLLECTION } from "../../../gql/Stories";
import PageStory from "../../../components/PageStory";

const WithStaticProps = ({ story }: PageStoryProps) => {
  return <PageStory story={story} />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const data = await contenfulFetch(GET_STORY_COLLECTION);
    const stories = data.storyCollection.items;
    const story = stories.find((story: Story) => story.sys.id === String(id));
    return { props: { story } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await contenfulFetch(GET_STORY_COLLECTION);
  const stories = data.storyCollection.items;
  const paths = stories.map((story: Story) => ({
    params: { id: story.sys.id.toString() },
  }));
  return { paths, fallback: false };
};

export default WithStaticProps;
