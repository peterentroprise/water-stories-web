import { HASURA_API_URL } from "../constants/hasura";
import { request, gql } from "graphql-request";

export default async function hasuraFetch(mutation, variables, encodedToken) {
  const requestHeaders = {
    Authorization: "Bearer " + encodedToken,
    "x-hasura-role": "user",
  };

  const res = await request(
    HASURA_API_URL,
    mutation,
    variables,
    requestHeaders
  ).then((data) => console.log(data));

  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}
