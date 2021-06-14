export const GET_STORY = `
query getStory($id: String!) {
  story(id: $id) {
    slug
    storyName
    coverImage {
      url(transform: {format: JPG_PROGRESSIVE})
    }
    coverVideoUrl
    storyShortDescription
    storyLongDescription {
      json
    }
    sys {
      id
    }
  }
}`;

export const GET_STORY_BY_SLUG = `
query getStoryBySlug($slug: String!) {
  story(where: { slug: $slug }) {
    coverImage {
        url
      }
      description
      id
      slug
      title
      subTitle
      videoUrl
    }
  }
`;

export const GET_STORIES = `
query getStories {
  stories {
    coverImage {
      url
    }
    description
    id
    slug
    subTitle
    title
    videoUrl
  }
}`;
