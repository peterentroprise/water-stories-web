import { GetStaticProps, GetStaticPaths } from "next";

import contenfulFetch from "../../../utils/contenfulFetch";
import { PageStoryProps, Story } from "../../../types";
import { GET_STORY_FROM_SLUG, GET_STORY_COLLECTION } from "../../../gql/story";
import PageStory from "../../../components/PageStory";

const WithStaticProps = ({ story }: PageStoryProps) => {
  return <PageStory story={story} />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const slug = params?.slug;
    const data = await contenfulFetch(GET_STORY_FROM_SLUG, {
      variables: { slug: slug },
    });
    const story = data.storyCollection.items[0];

    return { props: { story } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await contenfulFetch(GET_STORY_COLLECTION);
  const stories = data.storyCollection.items;

  const paths = stories.map((story: Story) => ({
    params: { slug: story.slug.toString() },
  }));
  return { paths, fallback: false };
};

export default WithStaticProps;
