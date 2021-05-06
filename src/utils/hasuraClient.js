import { GraphQLClient } from "graphql-request";
import { HASURA_API_URL } from "../constants/hasura";

export const hasuraClient = () => new GraphQLClient(HASURA_API_URL);
