import { Welcome } from "../components";
import { PostWidget } from "../stories";
import { Grid } from "@mui/material";
import { getPosts } from "../api/getPosts";
import Link from "next/link";

export default function Home({ posts }) {
  return (
    <div>
      <Welcome />
      <Grid container spacing={1}>
        {posts.map(({ sys, fields }) => (
          <Grid item xs={12} md={6} lg={4} key={sys.id}>
            <Link
              href={`/posts/${sys.id}`}
              passHref
              style={{ textDecoration: "none" }}
            >
              <PostWidget title={fields.postTitle} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export async function getStaticProps() {
  const { posts } = await getPosts();
  return {
    props: { posts }, // will be passed to the page component as props
  };
}
