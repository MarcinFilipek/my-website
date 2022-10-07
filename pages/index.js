import { PostWidget, Welcome } from "../components";
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
            <Link href={`/posts/${sys.id}`} passHref>
              <a style={{ textDecoration: "none" }}>
                <PostWidget title={fields.postTitle} />
              </a>
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
