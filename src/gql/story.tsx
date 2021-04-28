export const GET_STORY = `
query getStory($id: String!) {
  story(id: $id) {
    slug
    storyName
    coverImage {
      url
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

export const GET_STORY_COLLECTION = `
query getStoryCollection {
  storyCollection {
    items {
      slug
      storyName
      coverImage {
        url
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
  }
}`;
