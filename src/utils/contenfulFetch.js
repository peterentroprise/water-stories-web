import config from "./contentfulConfig";

export default async function contenfulFetch(query, { variables } = {}) {
  const res = await fetch(config.CONTENTFUL_API_URL + config.CONTENTFUL_SPACE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.CONTENTFUL_ACCESS_TOKEN}`,
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
