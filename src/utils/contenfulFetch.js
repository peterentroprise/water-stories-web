import {
  CONTENTFUL_API_URL,
  CONTENTFUL_SPACE,
  CONTENTFUL_ACCESS_TOKEN,
} from "../constants/contentful";

export default async function contenfulFetch(query, { variables } = {}) {
  const res = await fetch(CONTENTFUL_API_URL + CONTENTFUL_SPACE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error("Failed to fetch API");
  }
  return json.data;
}
