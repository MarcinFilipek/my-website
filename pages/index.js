import { PostWidget } from "../components";
import { Grid } from "@mui/material";
import { getPosts } from "../api/getPosts";

export default function Home({ posts }) {
  return (
    <Grid container spacing={1} sx={{ mt: 20 }}>
      {posts.map(({ sys, fields }) => (
        <Grid item xs={12} md={6} lg={4} key={sys.id}>
          <PostWidget title={fields.postTitle} />
        </Grid>
      ))}
    </Grid>
  );
}

export async function getStaticProps() {
  const { posts } = await getPosts();
  if (posts) {
    console.log(posts);
  }
  return {
    props: { posts }, // will be passed to the page component as props
  };
}
