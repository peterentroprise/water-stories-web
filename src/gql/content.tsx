export const GET_CONTENT_PREVIEW_SLUGS = `
query getContentPreviewsSlugs {
  contentPreviews {
    id
    slug
  }
}
`;

export const GET_CONTENT_PREVIEW_BY_SLUG = `
query getContentPreviewBySlug($slug: String!) {
  contentPreview(where: {slug: $slug}) {
    id
    description
    slug
    subTitle
    tags
    title
    coverImage {
      url
    }
    content {
      contentPayload {
        videoUrl
        id
      }
    }
  }
  }
`;

export const GET_CONTENT_PAYLOAD_BY_ID = `
query getContentPayloadById($id: ID!) {
  contentPayload(where: {id: $id}) {
    id
    videoUrl
  }
  }
`;
