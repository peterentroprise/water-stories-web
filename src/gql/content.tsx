export const GET_USER_CONTENT = `
query getUserContent {
   content {
    id
    content_story {
      storyName
    }
  }
}`;
