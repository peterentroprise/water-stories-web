export const GET_STORIES_BY_TIER = `
query getStoriesByTier($id: ID!) {
  contentTier(where: {id: $id}) {
    storyGroups {
      stories {
        videoUrl
        title
        subTitle
        slug
        id
        description
        coverImage {
          url
        }
      }
    }
  }
}
`;
