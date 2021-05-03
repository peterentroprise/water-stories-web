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

export const GET_STORY_FROM_SLUG = `
query getStoryFromSlug($slug: String!) {
  storyCollection(where: { slug: $slug }) {
    items {
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
  }
}`;

export const GET_STORY_COLLECTION = `
query getStoryCollection {
  storyCollection {
    items {
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
  }
}`;
