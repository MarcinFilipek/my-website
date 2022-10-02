import { client } from "./client";

export const getPosts = async () => {
  const entires = await client.getEntries();
  if (entires.items) {
    return { posts: entires.items };
  }
  return { posts: [] };
};
