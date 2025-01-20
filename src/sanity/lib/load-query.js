import { sanityClient } from "sanity:client";

const visualEditingEnabled =
  import.meta.env.PUBLIC_SANITY_VISUAL_EDITING_ENABLED === "true";
const token = import.meta.env.SANITY_API_READ_TOKEN;

export async function loadQuery({ query, params, cookies }) {
  if (visualEditingEnabled && !token) {
    throw new Error(
      "The `SANITY_API_READ_TOKEN` environment variable is required during Visual Editing.",
    );
  }
  
  const isDraftMode = cookies.get('sanity-draft-mode')?.value === 'true';
  const perspective = isDraftMode ? "previewDrafts" : "published";
  console.log('Draft mode cookie:', cookies.get('sanity-draft-mode')?.value);
  console.log('Is draft mode:', isDraftMode);

  const { result, resultSourceMap } = await sanityClient.fetch(
    query,
    params ?? {},
    {
      filterResponse: false,
      perspective,
      resultSourceMap: true,
      stega: true,
      token: isDraftMode ? token : undefined,
    },
  );

  return {
    data: result,
    sourceMap: resultSourceMap,
    perspective,
  };
}