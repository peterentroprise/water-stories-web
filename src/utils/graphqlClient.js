import { GraphQLClient } from "graphql-request";
import {
  CONTENTFUL_API_URL,
  CONTENTFUL_SPACE,
  CONTENTFUL_ACCESS_TOKEN,
} from "../constants/contentful";

const endpoint = CONTENTFUL_API_URL + CONTENTFUL_SPACE;

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
  },
});
