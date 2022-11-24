import { Grid, Link } from "@mui/material";
import { PostWidget } from "../../stories";
import { getPosts } from "../../api/getPosts";

export const Blog = ({ posts }) => (
  <Grid container spacing={1}>
    {posts.map(({ sys, fields }) => (
      <Grid item xs={12} md={6} lg={4} key={sys.id}>
        <Link
          href={`/post/${sys.id}`}
          passHref
          style={{ textDecoration: "none" }}
        >
          <PostWidget title={fields.postTitle} />
        </Link>
      </Grid>
    ))}
  </Grid>
);

export async function getStaticProps() {
  const { posts } = await getPosts();
  return {
    props: { posts },
  };
}

export default Blog;
