export type Story = {
  storyName: string;
  storyShortDescription: string;
  storyLongDescription: {
    json: any;
  };
  slug: string;
  coverVideoUrl: string;
  coverImage: {
    url: string;
  };
  sys: {
    id: string;
  };
};
